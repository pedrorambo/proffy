import {Request, Response} from 'express';
const NestHydrationJS = require('nesthydrationjs')();

import convertHoursToMinutes from "../utils/convertHoursToMinutes";
import db from "../database/connection";

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class ClassesController {

    async index(request: Request, response: Response){
        const filters = request.query;
        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        const timeInMinutes = convertHoursToMinutes(time);

        const classes = await db('classes')
            .whereExists(function (){
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
                    
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .join('class_schedule', 'class_schedule.class_id', '=', 'classes.id')
            .options({nestTables: true})
            .select([
                'classes.*', 
                'users.*',
                'class_schedule.week_day AS schedule_week_day',
                'class_schedule.from AS schedule_from',
                'class_schedule.to AS schedule_to',
        ]);


        const nestHydrationDefinition = [{
            id: "id",
            subject: "subject",
            cost: "cost",
            name: "name",
            avatar: "avatar",
            whatsapp: "whatsapp",
            bio: "bio",
            schedules: [{
                week_day: 'schedule_week_day',
                from: 'schedule_from',
                to: 'schedule_to',
            }]
        }]

        const nestedClasses = NestHydrationJS.nest(classes, nestHydrationDefinition);

        return response.json(nestedClasses);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = request.body;

        const trx = await db.transaction();

        try {
            const [user_id] = await trx("users").insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const [class_id] = await trx("classes").insert({
                subject,
                cost,
                user_id,
            });

            const transformedClassSchedule = schedule.map(
                (scheduleItem: ScheduleItem) => {
                    return {
                        week_day: scheduleItem.week_day,
                        from: convertHoursToMinutes(scheduleItem.from),
                        to: convertHoursToMinutes(scheduleItem.to),
                        class_id,
                    };
                }
            );

            await trx("class_schedule").insert(transformedClassSchedule);

            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            trx.rollback();
            return response.status(400).json({
                error: "Unexpedted error while creating new class",
            });
        }
    }
}

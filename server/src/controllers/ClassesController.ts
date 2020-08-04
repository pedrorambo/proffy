import {Request, Response} from 'express';
import convertHoursToMinutes from "../utils/convertHoursToMinutes";
import db from "../database/connection";

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class ClassesController {
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

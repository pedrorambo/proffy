import express, { Router } from "express";
import db from "./database/connection";
import convertHoursToMinutes from "./utils/convertHoursToMinutes";

const routes = express.Router();

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

routes.post("/classes", async (request, response) => {
    const {
        name, 
        avatar, 
        whatsapp, 
        bio, 
        subject, 
        cost, 
        schedule} = request.body;

    const [user_id] = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio        
    })

    const [class_id] = await db('classes').insert({
        subject,
        cost,
        user_id,
    })

    const transformedClassSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
            week_day: scheduleItem.week_day,
            from: convertHoursToMinutes(scheduleItem.from),
            to: convertHoursToMinutes(scheduleItem.to),
            class_id
        }
    });

    await db('class_schedule').insert(transformedClassSchedule);

    return response.send();
});

export default routes;

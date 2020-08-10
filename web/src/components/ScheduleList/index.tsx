import React from 'react'

import './styles.css';
import convertMinutesToHours from '../../utils/convertMinutesToHours';

interface SheduleListProps{
    schedules: Array<{}>;
}

const ScheduleList: React.FC<SheduleListProps> = (props) => {

    const {schedules} = props;

    function getScheduleTimeFromWeekDay(weekDay: number){
        const schedule: any =  schedules.filter((scheduleItem: any) => scheduleItem.week_day === weekDay)[0]
        if(schedule){
            return `${convertMinutesToHours(schedule.from)}h - ${convertMinutesToHours(schedule.to)}h`; 
        }else{
            return "-";
        }
    }

    function weekDayExists(weekDay: number){
        const schedule = schedules.filter((scheduleItem: any) => scheduleItem.week_day === weekDay);
        if(schedule.length > 0){
            return true;
        }
    }

    function getScheduleItemClassesFromWeekDay(weekDay: number){
        return weekDayExists(weekDay) ? "schedule-item" : "schedule-item schedule-item-disabled"; 
    }

    return(
        <div className="schedule-list">
            <div className={getScheduleItemClassesFromWeekDay(1)}>
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Segunda</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">{getScheduleTimeFromWeekDay(1)}</span>
            </div>
            <div className={getScheduleItemClassesFromWeekDay(2)}>
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Terça</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">{getScheduleTimeFromWeekDay(2)}</span>
            </div>
            <div className={getScheduleItemClassesFromWeekDay(3)}>
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Quarta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">{getScheduleTimeFromWeekDay(3)}</span>
            </div>
            <div className={getScheduleItemClassesFromWeekDay(4)}>
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Quinta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">{getScheduleTimeFromWeekDay(4)}</span>
            </div>
            <div className={getScheduleItemClassesFromWeekDay(5)}>
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Sexta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">{getScheduleTimeFromWeekDay(5)}</span>
            </div>
        </div>
    )
}

export default ScheduleList;
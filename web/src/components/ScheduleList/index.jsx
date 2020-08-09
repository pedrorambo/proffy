import React from 'react'

import './styles.css';

function ScheduleList(){
    return(
        <div className="schedule-list">
            <div className="schedule-item">
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Segunda</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">8h - 10h</span>
            </div>
            <div className="schedule-item">
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Terça</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">8h - 10h</span>
            </div>
            <div className="schedule-item">
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Quarta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">8h - 10h</span>
            </div>
            <div className="schedule-item">
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Quinta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">8h - 10h</span>
            </div>
            <div className="schedule-item">
                <span className="schedule-label">Dia</span>
                <span className="schedule-text">Sexta</span>
                <span className="schedule-label">Horário</span>
                <span className="schedule-text">8h - 10h</span>
            </div>
        </div>
    )
}

export default ScheduleList;
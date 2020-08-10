import React from "react";
import api from "../../services/api";
import ScheduleList from "../ScheduleList";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
    schedules: [];
};

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    const {id, avatar, bio, cost, name, subject, whatsapp, schedules} = teacher;

    function createNewConnection(){
        api.post("connections", {
            user_id: id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img
                    src={avatar}
                    alt={name}
                />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>
            <p>
                {bio}
            </p>

            <ScheduleList schedules={schedules}/>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {cost}</strong>
                </p>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${whatsapp}`}
                    onClick={createNewConnection}    
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;

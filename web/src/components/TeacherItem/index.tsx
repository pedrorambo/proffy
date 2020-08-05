import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number
    name: string
    subject: string
    whatsapp: string
};

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    const {avatar, bio, cost, name, subject, whatsapp} = teacher;

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

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {cost}</strong>
                </p>
                <a href={`https://wa.me/${whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;

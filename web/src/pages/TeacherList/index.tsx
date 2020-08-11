import React, { useState, FormEvent } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";



function TeacherList() {
    const [subject, setSubject] = useState("");
    const [weekDay, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    const [teachers, setTeachers] = useState([]);

    async function handleSearchSubit(e: FormEvent){
        e.preventDefault();

        const response = await api.get("classes", {
            params: {
                subject: subject || "Física",
                week_day: weekDay || "1",
                time: time || "11:00",
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={handleSearchSubit}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: "Artes", label: "Artes" },
                            {
                                value: "Educação Física",
                                label: "Educação Física",
                            },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Português", label: "Português" },
                            { value: "Literatura", label: "Literatura" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "História", label: "História" },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia"
                        value={weekDay}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda" },
                            { value: "2", label: "Terça" },
                            { value: "3", label: "Quarta" },
                            { value: "4", label: "Quinta" },
                            { value: "5", label: "Sexta" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />

                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => setTime(e.target.value)} 
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>  
                {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
            </main>
        </div>
    );
}

export default TeacherList;

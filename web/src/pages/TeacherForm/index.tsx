import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

import api from "../../services/api";
import { useHistory } from "react-router";

function TeacherForm() {
    const history = useHistory();

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map(
            (scheduleItem, scheduleItemIndex) => {
                if (scheduleItemIndex === index) {
                    return { ...scheduleItem, [field]: value };
                } else {
                    return scheduleItem;
                }
            }
        );

        setScheduleItems(updatedScheduleItems);
    }

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    function handleClassSubmit(e: FormEvent) {
        e.preventDefault();

        api.post("classes", {
            name,
            avatar,
            whatsapp,
            bio,
            subject,

            cost: Number(cost),
            schedule: scheduleItems,
        })
            .then(() => {
                alert("Cadastrado com sucesso");
                history.push("/");
            })
            .catch(() => {
                alert("Erro no cadastro");
            });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems,
        });
    }

    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Estes são os proffys disponíveis"
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <form onSubmit={handleClassSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />

                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />

                        <TextArea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

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

                        <Input
                            name="cost"
                            label="Curso da sua hora por aula"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div
                                    key={scheduleItem.week_day}
                                    className="schedule-item"
                                >
                                    <Select
                                        name="week_day"
                                        label="Dia"
                                        value={scheduleItem.week_day}
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "week_day",
                                                e.target.value
                                            )
                                        }
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
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "from",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "to",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;

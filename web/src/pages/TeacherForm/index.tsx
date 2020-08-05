import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Select from "../../components/Select";

function TeacherForm() {
    return (
        <div id="page-teacher-form">
            <PageHeader
                title="Estes são os proffys disponíveis"
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Educação Física", label: "Educação Física" },
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
                    <Input name="cost" label="Curso da sua hora por aula" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;

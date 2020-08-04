import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/32118136?s=460&u=80b5c10713502a15735eb1f43f96567414a0dd13&v=4"
                    alt="Pedro Rambo"
                />
                <div>
                    <strong>Pedro Rambo</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Também conhecido como "Mestre da Química", Pedro sempre
                surpreende com seus experimentos explosivos.
                <br />
                <br />
                Possui sala de aula, mas também atende em sua casa.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

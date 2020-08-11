import React from "react";
import Input from "../../components/Input";

import "./styles.css";

import logoImg from '../../assets/images/logo.svg';

function Login() {
    return (
        <div id="page-login">
            <div className="banner">
                <div className="content">
                    <img src={logoImg} alt="Proffy"/>
                    <div className="text">
                        <span>Sua plataforma de estudos online.</span>
                    </div>
                </div>
            </div>

            <div className="login-form">
                <form action="">
                    <fieldset>
                        <legend>Fazer login</legend>

                        <Input name="email" grouped placeholder="E-mail" className="border-radius-top"/>
                        <Input name="password" grouped placeholder="Senha" className="border-radius-bottom"/>
                        
                        <button type="submit" className="btn">Entrar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;

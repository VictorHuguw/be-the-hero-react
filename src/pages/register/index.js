import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

export default function register() {

    function handleRegister(e){
        e.preventDefault();
    }

    function enviar(){
     alert('entrou')
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="rous" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os caso da sua ONG.</p>

                    <Link className= ".back-link" to="/register"><FiArrowLeft size={16} color="#E02041" />Não tenho cadastro</Link>
                </section>
                <form onSubmit = {handleRegister}>  
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input placeholder="cidade"/>
                        <input placeholder="UF" style={{ width : 80}}/>
                    </div>
                    <button className = "button" type="submit">Cadastrar</button>
                    <button className = "button" onClick = {enviar}>Listar</button>
                </form>
            </div>
        </div>
    )
}
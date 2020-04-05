import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="rous" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os caso da sua ONG.</p>

                    <Link className= ".back-link" to="/register"><FiArrowLeft size={16} color="#E02041" />Não tenho cadastro</Link>
                </section>
                <form>  
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input placeholder="cidade"/>
                        <input placeholder="UF" style={{ width : 80}}/>
                    </div>
                    <button className = "button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
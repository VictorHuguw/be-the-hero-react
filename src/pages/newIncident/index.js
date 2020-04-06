import React from 'react';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css';

export default function newIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="rous" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamento apra encontrar um heróis para resolver isso.</p>

                    <Link className= ".back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />Voltar para Home</Link>
                </section>
                <form>  
                    <input placeholder="Titulo do caso"/>
                    <textarea  placeholder="Descricao"/>
                    <input placeholder="Valor em reais"/>
                    <button className = "button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
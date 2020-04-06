import React from 'react';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi'; 
import './styles.css';

export default function profile(){
    return (
        <div className = "profile-container">
            <header>
                <img src = {logo} alt = "teste" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size = {18} color = "#E02040"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO : </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR: </strong>
                    <p> R$ 120,00 </p>

                    <button type="button" >
                        <FiTrash2 size = {20} color = "#a8a8d3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO : </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR: </strong>
                    <p> R$ 120,00 </p>

                    <button type="button" >
                        <FiTrash2 size = {20} color = "#a8a8d3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO : </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR: </strong>
                    <p> R$ 120,00 </p>

                    <button type="button" >
                        <FiTrash2 size = {20} color = "#a8a8d3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>CASO : </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descricao teste</p>

                    <strong>VALOR: </strong>
                    <p> R$ 120,00 </p>

                    <button type="button" >
                        <FiTrash2 size = {20} color = "#a8a8d3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
        
    )
}
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            history.push('/');
            alert(`Seu ID de acesso: ${response.data.id}`);
        } catch (err) {
            alert('Erro no cadastro. Tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </ Link>
                </section>

                <form onSubmit={handleRegister} >
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatapp(e.target.value)} />

                    <div>
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />

                        <input placeholder="UF"
                            value={uf} style={{ width: 80 }}
                            onChange={e => setUf(e.target.value)} />
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
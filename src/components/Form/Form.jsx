import { useState } from 'react';

import api from '../../axios';

import './Form.scss';

export default function Form() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [area, setArea] = useState('');
    const [text, setText] = useState('Envoyer');
    const submitButton = document.querySelector('.buttonText')

    const messageSent = async (e) => {
        e.preventDefault();

        if (name && surname && email && area) {

            const response = await api.post("/mail", {
                name, surname, email, area
            });

            setText(response.data.message);
            setName('');
            setSurname('');
            setEmail('');
            setArea('');

        }
        else {
            setText('Erreur !');
        }

        setTimeout(() => {
            setText('Envoyer');
        }, 1500);

    }

    return (
        <div className='form-container' id='contact'>
            <form className="form" required>
                <div className="form--text">
                    <div className='form-fields'>
                        <div className='form-title'>Contact</div>
                        <div className="form-field">
                            <label htmlFor="nom" style={{fontFamily: "'signika', sans-serif", fontWeight: '600', textShadow: '1px 1px 1px black'}}>Nom</label>
                            <input type="text" name="nom" id="nom" placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="prenom" style={{fontFamily: "'signika', sans-serif", fontWeight: '600', textShadow: '1px 1px 1px black'}}>Prénom</label>
                            <input type="text" name="prenom" id="prenom" placeholder='Prénom' value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email" style={{fontFamily: "'signika', sans-serif", fontWeight: '600', textShadow: '1px 1px 1px black'}}>E-mail</label>
                            <input type="e-mail" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-field">
                        <textarea placeholder='Message' value={area} onChange={(e) => setArea(e.target.value)}></textarea>
                    </div>
                    <div className="form-field">
                        <button style={{ fontFamily: "'signika', sans-serif", fontWeight: '400' }} onClick={messageSent} className="submit" type='submit'>
                            <span className="buttonText">{text}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
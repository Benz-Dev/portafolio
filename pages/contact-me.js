import styles from '../styles/Contact.module.css'
import React, { useState } from 'react';
import {useId} from "react";

export default function Contact(){
    const IDName = useId();
    const IDEmail = useId();
    const IDMessage = useId();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const code = `{`;
    const codet = `}`;

   
    const HandlerNameDown = () => {
        setName(document.getElementById(IDName).value);
    }
    const HandlerMailDown = () => {
        setEmail(document.getElementById(IDEmail).value);
    }

    const HandlerMessageDown = () => {
        setMessage(document.getElementById(IDMessage).value);
    }

    const HandlerSEnd = (e) => {
        e.preventDefault();
       if (document.getElementById(IDMessage).value === '' || document.getElementById(IDEmail).value === '' ||document.getElementById(IDName).value === ''){
        alert('Todos los campos son requeridos')
       } else {
        document.getElementById(IDMessage).value = ''
        setMessage(document.getElementById(IDMessage).value);
        document.getElementById(IDEmail).value = ''
        setEmail(document.getElementById(IDEmail).value);
        document.getElementById(IDName).value = ''
        setName(document.getElementById(IDName).value);
        alert('Abriendo tu cliente de correo')
        window.open(`mailto:benzsolutionsweb@gmail.com?subject=${document.getElementById(IDName).value}%20-%20Peticion%20en%20portafolio&body=${document.getElementById(IDMessage).value}`)
       }
    }

    return (
        <div className={styles.content_contact}> 
            <div className={styles.form}>
                <div className={styles.container}>
                    <div className={styles.input}>
                        <label>_name:</label>
                        <input type='text' id={IDName} onKeyUp={HandlerNameDown}></input>
                    </div>
                    <div className={styles.input}>
                        <label>_email:</label>
                        <input type='mail' id={IDEmail} onKeyUp={HandlerMailDown}></input>
                    </div>
                    <div className={styles.input}>
                        <label>_message:</label>
                        <textarea rows='10' id={IDMessage} onKeyUp={HandlerMessageDown}></textarea>
                    </div>
                    <div className={styles.sb}><button type='submit' onClick={HandlerSEnd}>submit-message</button></div>
                </div>
            </div>
            <div className={styles.json}>
                <div className={styles.container}>
                    <div className={styles.line}>
                        <span className={styles.number}>1</span>  <span className={styles.var}>const</span> button <span  className={styles.var}>=</span> document.querySelector<span className={styles.caracter}>(</span><span className={styles.content}>&#39;#sendBtn&#39;</span><span className={styles.caracter}>);</span><br></br>
                        <span className={styles.number}>2</span><br></br>
                        <span className={styles.number}>3</span>  <span className={styles.var}>const</span> message <span  className={styles.var}>=</span> <span className={styles.caracter}>{code}</span><br></br>
                        <span className={styles.number}>4</span>&#8194;&#8194; name: <span className={styles.content}>&quot;{name}&quot;</span><br></br>
                        <span className={styles.number}>5</span>&#8194;&#8194; email: <span className={styles.content}>&quot;{email}&quot;</span><br></br>
                        <span className={styles.number}>6</span>&#8194;&#8194; message: <span className={styles.content}>&quot;{message}&quot;</span><br></br>
                        <span className={styles.number}>7</span>&#8194;&#8194; <span className={styles.caracter}>date:</span> <span className={styles.content}>&quot;Mier 24 Sept&quot;</span><br></br>
                        <span className={styles.number}>8</span> <span className={styles.caracter}>{codet}</span><br></br>
                        <span className={styles.number}>9</span><br></br>
                        <span className={styles.number}>10</span>  button.addEventListener<span className={styles.caracter}>(</span><span className={styles.content}>&#39;click&#39;</span><span className={styles.caracter}>, () <span className={styles.var}>&#8594;</span> {code}</span><br></br>
                        <span className={styles.number}>11</span>&#8194;&#8194; form.send<span className={styles.caracter}>(</span>message<span className={styles.caracter}>);</span><br></br>
                        <span className={styles.number}>12</span><span className={styles.caracter}>{codet})</span><br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}
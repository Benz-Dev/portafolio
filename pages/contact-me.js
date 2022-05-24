import styles from '../styles/Contact.module.css'

export default function contact(){
    const code = `{`;
    const codet = `}`;

    return (
        <div className={styles.content_contact}> 
            <div className={styles.form}>
                <div className={styles.container}>
                    <div className={styles.input}>
                        <label>_name:</label>
                        <input type='text'></input>
                    </div>
                    <div className={styles.input}>
                        <label>_email:</label>
                        <input type='mail'></input>
                    </div>
                    <div className={styles.input}>
                        <label>_message:</label>
                        <textarea rows='10'></textarea>
                    </div>
                    <div className={styles.sb}><button type='submit'>submit-message</button></div>
                </div>
            </div>
            <div className={styles.json}>
                <div className={styles.container}>
                    <div className={styles.line}>
                        <span className={styles.number}>1</span>  <span className={styles.var}>const</span> button <span  className={styles.var}>=</span> document.querySelector<span className={styles.caracter}>(</span><span className={styles.content}>&#39;#sendBtn&#39;</span><span className={styles.caracter}>);</span><br></br>
                        <span className={styles.number}>2</span><br></br>
                        <span className={styles.number}>3</span>  <span className={styles.var}>const</span> message <span  className={styles.var}>=</span> <span className={styles.caracter}>{code}</span><br></br>
                        <span className={styles.number}>4</span>&#8194;&#8194; name: <span className={styles.content}>&quot;Jose Manuel&quot;</span><br></br>
                        <span className={styles.number}>5</span>&#8194;&#8194; email: <span className={styles.content}>&quot;benzsolutionsweb@gmail.com&quot;</span><br></br>
                        <span className={styles.number}>6</span>&#8194;&#8194; message: <span className={styles.content}>&quot;Hi&quot;</span><br></br>
                        <span className={styles.number}>7</span>&#8194;&#8194; <span className={styles.caracter}>date:</span> <span className={styles.content}>&quot;Thu 24 May&quot;</span><br></br>
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
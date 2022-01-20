import React from 'react';

//Styles
import styles from '../styles/contact.module.scss';

//Page contact
export function Contact(){
  return(
    <div className={styles.app}>
      <h1>Resolva todas seus problemas de manutenção, possuindo tudo na palma da sua mão.</h1>
      <div className={styles.box}>
        <form >
          <span>Fale com a gente</span>
          <input type="text" placeholder='Nome'/>
          <input type="email" placeholder='E-mail' />
          <input type="text" placeholder='Telefone' />
          <button>Enviar</button>
        </form>
        <img src="peoples.svg" alt="" />
      </div>
    </div>
  )
}
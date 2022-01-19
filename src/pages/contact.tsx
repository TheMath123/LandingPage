//Styles
import styles from '../styles/contact.module.scss';

//Page contact
export function contact(){
  return(
    <div className={styles.app}>
      <h1>Resolva todas seus problemas de manutenção, possuindo tudo na palma da sua mão.</h1>
      <form >
        <input type="text" placeholder='Nome'/>
        <input type="email" placeholder='E-mail' />
        <input type="text" placeholder='Telefone' />

        <button>Agende uma demonstração</button>
      </form>
    </div>
  )
}
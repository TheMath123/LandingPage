import React from 'react';

//Styles
import styles from '../styles/footer.module.scss';

//Components Footer
export function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.itens}>
        <ul>
          PRODUTOS
          <li><a href="a">Sensor Tractian</a></li>
          <li><a href="b">Plataforma</a></li>
          <li><a href="c">Funcionalidades</a></li>
          <li><a href="d">Planos e preços</a></li>
        </ul>

        <ul>
          MATERIAIS
          <li><a href="e">Guias e Ebooks</a></li>
          <li><a href="f">Checklists</a></li>
          <li><a href="g">Intensivão</a></li>
          <li><a href="h">Calculadora</a></li>
        </ul>

        <ul>
          SOBRE A TRACTIAN
          <li><a href="i">Conheça a Tractian</a></li>
          <li><a href="j">Histórias de Sucesso</a></li>
          <li><a href="k">Imprensa</a></li>
          <li><a href="l">Trabalhe conosco</a></li>
          <li><a href="m">Política de Privacidade</a></li>
        </ul>

        <ul>
          FALE CONOSCO
          <li><a href="i">Contato</a></li>
          <li><a href="j">Indique e Ganhe</a></li>
          <li><a href="k">Agende uma demonstração</a></li>
        </ul>

        <img src="premios.png" alt="Premios" />
      </div>
      <div className={styles.footerFinal}>
        <span>Feito com <img src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8" alt="amor"/> por <a href="https://github.com/themath123" target={'_blank'}>Matheus</a>.</span>
        <span>© Tractian Tecnologia Ltda - CNPJ: 35.755.699/0001-84</span>
        <div className={styles.socialsmedia}>
          <a href="https://www.facebook.com/tractian" target={'_blank'}><img src="facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com/tractian/" target={'_blank'}><img src="instagram.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/tractian/" target={'_blank'}><img src="linkedin.png" alt="Linkedin" /></a>
          <a href="https://www.youtube.com/c/TRACTIAN" target={'_blank'}><img src="youtube.png" alt="Youtube" /></a>
        </div>
      </div>
    </div>
  )
}
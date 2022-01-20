import React, { useState } from 'react';

//Styles
import styles from "../styles/header.module.scss";

//Component Header
export function Header() {
  const [ stateModal, setStateModal] = useState(false);

  function openModal(){
    setStateModal(true)
  }

  function closedModal(){
    setStateModal(false)
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="logo.svg" alt="Tractian" />
        </div>
        <div className={styles.divMenu} onClick={() => openModal()}>
          <div className={styles.menuBar} />
          <div className={styles.menuBar} />
          <div className={styles.menuBar} />
        </div>
        <nav>
          <a href="about">Sobre nós</a>
          <a href="products">Produtos</a>
          <a href="blog">Blog</a>
          <a href="clientarea">Área do cliente</a>
        </nav>
        <div className={styles.btnDemo}>
          <button>Agende sua demo</button>
        </div>

        <div 
          className={`${stateModal ? styles.enableModal : styles.disableModal} ${styles.modalMenu} ${stateModal && styles.animationMenuClosed}`} 
          onMouseLeave={() => closedModal()}
          onTouchMove={() => closedModal()}
        >
          <nav>
            <button
              className={styles.btnClosed}
              onClick={() => closedModal()}
            >
              <img src="closed.svg" alt="Fechar menu" />
            </button>
            <a href="about">Sobre nós</a>
            <a href="products">Produtos</a>
            <a href="blog">Blog</a>
            <a href="clientarea">Área do cliente</a>
            <a href="clientarea">Solicitar demo</a>
          </nav>
        </div>
      </div>
      
    </>
  );
}

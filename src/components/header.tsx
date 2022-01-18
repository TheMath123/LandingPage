import React from 'react';

//Styles
import styles from "../styles/header.module.scss";

//Component Header
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.svg" alt="Tractian" />
      </div>
      <div className={styles.divMenu}>
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
    </div>
  );
}

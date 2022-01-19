import React from 'react';

//Styles
import styles from "../styles/hero.module.scss";

//Page hero
export function Hero() {
  return (
    <main>
      <div className={styles.sideLeft}>
        <div>
          <h1>Monitoramento Online e Gestão de Ativos em um só lugar</h1>
          <h3>
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma
            coisa do passado com sistema preditivo da TRACTIAN.
          </h3>
        </div>
        <button>Saiba Mais</button>
      </div>
      <div className={styles.sideRight}>
        <img src="image-hero.svg" alt="" />
      </div>
    </main>
  );
}

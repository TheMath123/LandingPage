import React, { useState } from 'react';

//Styles
import styles from '../styles/products.module.scss';

//Page Products
export function Products(){
  const [sideRight, setSideRight] = useState(false);
  const [sideLeft, setSideLeft] = useState(false);

  return(
    <div className={styles.app}>
      <h1 className={styles.title}>Nossos serviços</h1>
      <div className={styles.box}>
        <div 
          className={`${sideRight&&styles.none} ${styles.left} ${styles.sides}`}
          onMouseEnter={() => setSideLeft(true)}
          onMouseLeave={() => setSideLeft(false)}
        >
          {!sideLeft ? (
            <div>
              <h1>Software de Manutenção</h1>
              <h1>TracOS™</h1>
              <img src="trackos.png" alt="TrackOS" />
            </div>
          ) : (
            <div className={`${styles.itens} ${styles.darkBlue}`}>
              <div>
                <h1>TracOS™ Software para Gerenciamento da Manutenção na palma da sua mão</h1>
                <p>Esqueça pilha de papéis ou pranchetas: agora você faz absolutamente tudo com a #1 plataforma para manutenção.</p>
              </div>
              <img src="imgTracos.png" alt="TrackOS" />
              <button className={styles.btnDemo}>
                <img src="emojiPeople.svg" alt="" />
                Agende uma demonstração
              </button>
            </div>
          )}
        </div>
               
        <div 
          className={`${sideLeft&&styles.none} ${styles.right} ${styles.sides}`} 
          onMouseEnter={() => setSideRight(true)}
          onMouseLeave={() => setSideRight(false)}
        >
          {!sideRight ? (
            <div>
              <img src="smarttrac.png" alt="Smart Trac" />
              <h1>Monitoramento Online</h1>
              <h1>Smart Trac</h1>
            </div>
          ) : (
            <div className={`${styles.itens} ${styles.blue}`}>
              <div>
                <h1>A melhor plataforma para monitoramento dos seus Ativos</h1>
                <p>Melhore o desempenho dos ativos e otimize a operação com a plataforma de monitoramento online mais completa do mercado.</p>
              </div>
              <img src="monitoringHome.png" alt="TrackOS" />
              <button className={styles.btnDemo}>
                <img src="emojiPeople.svg" alt="" />
                Agende uma demonstração
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}
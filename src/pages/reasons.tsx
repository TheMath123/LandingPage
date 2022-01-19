import React from 'react';

//Styles
import styles from "../styles/reasons.module.scss";

//Page Reasons
export function Reasons() {
  return (
    <main className={styles.main}>
      <h1>
        Por que escolheram a <strong>Tractian</strong>?
      </h1>
      <div className={styles.reasons}>
        <div className={`${styles.reason} ${styles.r1}`}>
          <h1>1</h1>
          <div>
            <span>Manutenção Preditiva</span>
            <p>
              Detecção automática de falhas, saúde do ativo em tempo real,
              confiabilidade e insights automáticos.
            </p>
          </div>
        </div>

        <div className={`${styles.reason} ${styles.r2}`}>
          <h1>2</h1>
          <div>
            <span>Monitoramento Online</span>
            <p>
              Sensor Tractian coleta dados de vibração, temperatura, horímetro e
              consumo de energia em tempo real.
            </p>
          </div>
        </div>

        <div className={`${styles.reason} ${styles.r3}`}>
          <h1>3</h1>
          <div>
            <span>Setup Instantâneo</span>
            <p>
              Solução Plug & Play, sem necessidade de WiFi industrial,
              comunicação via 3G/4G independente.
            </p>
          </div>
        </div>

        <div className={`${styles.reason} ${styles.r4}`}>
          <h1>4</h1>
          <div>
            <span>CMMS Integrado</span>
            <p>
              Automatize processos, ordens de serviço e tenha total controle
              sobre seus ativos e equipe.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

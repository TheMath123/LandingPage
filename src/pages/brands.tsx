import React from "react";

//Styles
import styles from "../styles/brands.module.scss";

//Page Brand Trust
export function Brands() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>Marcas que confiam no nosso trabalho</h1>
        <div className={styles.brands}>
          <a
            href="https://tractian.com/blog/de-olho-na-falha-pedro-nogueira-da-ahlstrom-munksjo"
            target={'_blank'}
          >
            <img src="brands/imgBrand1.svg" alt="ahlstrommunksjo" />
          </a>

          <a 
            href="https://tractian.com/blog/de-olho-na-falha-tiago-junqueira-da-amstedmaxion"
            target={'_blank'}
          >
            <img src="brands/imgBrand2.svg" alt="amstedmaxion" />
          </a>

          <a 
            href="https://tractian.com/blog/conheca-a-nova-rotina-de-manutencao-da-corteva-agriscience"
            target={'_blank'}
          >
            <img src="brands/imgBrand3.svg" alt="corteva" />
          </a>

          <a 
            href="https://tractian.com/blog/o-salto-da-confiabilidade-e-disponibilidade-de-ativos-na-embraer-com-a-solucao-da-tractian"
            target={'_blank'}
          >
            <img src="brands/imgBrand4.svg" alt="embraer" />
          </a>

          <a 
            href="https://tractian.com/blog/de-olho-na-falha-emerson-duarte"
            target={'_blank'}
          >
            <img src="brands/imgBrand5.svg" alt="master" />
          </a>

          <a 
            href="https://tractian.com/blog/de-olho-na-falha-pericles-sousa-yara"
            target={'_blank'}
          >
            <img src="brands/imgBrand6.svg" alt="yara" />
          </a>
        </div>
      </main>
    </div>
  );
}

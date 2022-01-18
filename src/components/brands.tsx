import React from "react";

//Styles
import styles from "../styles/brands.module.scss";

//Component Brand Trust
export function Brands() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>Marcas que confiam no nosso trabalho</h1>
        <div className={styles.brands}>
          <a href="ahlstrommunksjo">
            <img src="brands/imgBrand1.svg" alt="ahlstrommunksjo" />
          </a>
          <a href="amstedmaxion">
            <img src="brands/imgBrand2.svg" alt="amstedmaxion" />
          </a>
          <a href="corteva">
            <img src="brands/imgBrand3.svg" alt="corteva" />
          </a>
          <a href="embraer">
            <img src="brands/imgBrand4.svg" alt="embraer" />
          </a>
          <a href="master">
            <img src="brands/imgBrand5.svg" alt="master" />
          </a>
          <a href="yara">
            <img src="brands/imgBrand6.svg" alt="yara" />
          </a>
        </div>
      </main>
    </div>
  );
}

//Styles
import styles from "../styles/brands.module.scss";

//Component Brand Trust
export function Brands() {
  return (
    <main className={styles.main}>
      <h1>Marcas que confiam no nosso trabalho</h1>
      <div className="brands">
        <a href="#">
          <img src="brands/ahlstrommunksjo.svg" alt="ahlstrommunksjo" />
        </a>
        <a href="#">
          <img src="brands/amstedmaxion.svg" alt="amstedmaxion" />
        </a>
        <a href="#">
          <img src="brands/corteva.svg" alt="corteva" />
        </a>
        <a href="#">
          <img src="brands/embraer.svg" alt="embraer" />
        </a>
        <a href="#">
          <img src="brands/master.svg" alt="master" />
        </a>
        <a href="#">
          <img src="brands/yara.svg" alt="yara" />
        </a>
      </div>
    </main>
  );
}

import styles from "../styles/header.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src="logo.svg" alt="Tractian" />
      </div>
      <div className={styles.divMenu}>
        <div className={styles.menuBar} />
        <div className={styles.menuBar} />
        <div className={styles.menuBar} />
      </div>
      <nav>
        <a href="#">Sobre nós</a>
        <a href="#">Produtos</a>
        <a href="#">Blog</a>
        <a href="#">Área do cliente</a>
      </nav>
      <div className={styles.btnDemo}>
        <button>Agende sua demo</button>
      </div>
    </header>
  );
}

//Components
import { Header } from "./components/header";
import { Hero } from "./components/hero";

//Styles
import styles from "./styles/app.module.scss";

//Page App
export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
    </div>
  );
}

import React from "react";

//Components
import { Brands } from "./pages/brands";
import { Header } from "./components/header";
import { Hero } from "./pages/hero";
import { Products } from "./pages/products";
import { Reasons } from "./pages/reasons";

//Styles
import styles from "./styles/app.module.scss";

//Page App
export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Brands />
      <Reasons />
      <Products />
    </div>
  );
}

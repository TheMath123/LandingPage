import React from "react";

//Components
import { Brands } from "./components/brands";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { Reasons } from "./components/reasons";

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

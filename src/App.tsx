//Components
import { Header } from "./components/header";
import { Hero } from "./components/hero";

//Styles
import "./styles/app.scss";

//Page App
export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
}

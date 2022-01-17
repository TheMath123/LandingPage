//Styles
import "../styles/hero.scss";

//Component hero
export function Hero() {
  return (
    <main>
      <div className="sideLeft">
        <h1>Monitoramento Online e Gestão de Ativos em um só lugar</h1>
        <h3>
          Evite falhas nas suas máquinas e torne o tempo de inatividade uma
          coisa do passado com sistema preditivo da TRACTIAN.
        </h3>
        <button>Ver mais</button>
      </div>
      <div className="sideRight"></div>
    </main>
  );
}

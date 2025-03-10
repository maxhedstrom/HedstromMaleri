import React from "react";
import "../styles/hem.css"; 

const Hem = () => {
  return (
    <div>
        {/* ----------------- Första sektionen (Bakgrundsbild) ----------------- */}
        <section className="bakgrundsbild">
        {/* måste ha en sektion för att skapa en bild i css filen */}
        </section>

      <div className="textbox">
        <h1>En liten målerifirma med fokus på kvalité och nöjda kunder</h1>
        <p>
          En liten målerifirma belägen i centrala Örebro som drivs av mig Peter Hedström och min son Anton Hedström.<br />
          Vårt fokus ligger på kvalité och nöjda kunder sedan starten 2011.
        </p>
        <a href="#" className="hero-btn">Besök oss för att veta mer</a>
      </div>
        
      {/* ----------------- Tjänster ----------------- */}
      <section className="tjanster">
        <h1>Tjänster vi erbjuder</h1>
        <p>Vi erbjuder ett antal olika tjänster</p>
        <div className="row">
          <div className="tjanstkolumn">
            <h3>Spackling</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
          <div className="tjanstkolumn">
            <h3>Fasadmålning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
          <div className="tjanstkolumn">
            <h3>Våtrum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
        </div>
      </section>

      {/* ----------------- Geografisk plats ----------------- */}
      <section className="geografi">
        <h1>Var vi finns</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <div className="row">
          <div className="geografikolumn">
            <img src="src/assets/bilder/slottet.jpg" alt="Slottet" />
            <div className="layer">
              <h3>ÖREBRO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Utvalda uppdragsgivare ----------------- */}
      <section className="uppdragsgivare">
        <div className="text-container">
          <h1>Utvalda uppdragsgivare</h1>
          <p>
            <br />
            Vi utför arbeten åt kunder, stora som små, och strävar alltid efter att leverera högsta kvalitet.<br />
            Vi har ett antal referenser!
          </p>
        </div>
        <div className="row">
          <div className="uppdragskolumn">
            <a href="https://www.oru.se/">
              <img src="src/assets/bilder/kommun-logo.png" alt="Örebro Kommun" />
            </a>
            <h3>Örebro Kommun</h3>
          </div>
          <div className="uppdragskolumn">
            <a href="https://www.oru.se/">
              <img src="src/assets/bilder/sorby-logo.png" alt="Sörbyskolan" />
            </a>
            <h3>Sörbyskolan</h3>
          </div>
          <div className="uppdragskolumn">
            <a href="https://www.oru.se/">
              <img src="src/assets/bilder/universitetet-logo.png" alt="Örebro Universitet" />
            </a>
            <h3>Örebro Universitet</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hem;

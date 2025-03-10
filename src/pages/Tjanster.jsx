import React from "react";
import "../styles/tjanster.css"; 

function Tjanster() {
  return (
    <div>
      <section className="bakgrundsbildTjanster">
        {/* måste ha en sektion för att skapa en bild i css filen */}
      </section>
      
      <div className="textbox">
        <h1>Tjänster vi erbjuder</h1>
        <p>
          Vi erbjuder ett brett antal oasvett storlek på ditt kommande projekt!<br />
          Vi målar allt från lägenheter, villor, kontor och industrier.
        </p>
        <a href="#" className="hero-btn">Besök oss för att veta mer</a>
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
      </div>
    </div>
  );
}

export default Tjanster;
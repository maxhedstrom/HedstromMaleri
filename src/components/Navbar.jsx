import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/bilder/logo-med-farg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
        {/* Logotyp */}
        <a href="/">
          <img id="logo" src={logo} alt="Logotyp" />
        </a>
        </div>
        {/* Meny */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          {/* <i className="fas fa-times" onClick={() => setMenuOpen(false)}></i> */}
          <ul>
            <li><a href="/">Hem</a></li>
            <li><a href="/om">Om oss</a></li>
            <li><a href="/tjanster">Tjänster</a></li>
            <li><a href="/projekt">Våra projekt</a></li>
            <li><a href="/rot">ROT-Avdrag</a></li>
            <li><a href="/kontakt">Kontakta oss</a></li>
          </ul>
        </div>
        <i className="fas fa-times" onClick={() => setMenuOpen(false)}></i>
        {/* Hamburgarikonen för mobil */}
        <i className="fas fa-bars" onClick={() => setMenuOpen(true)}></i>
      </nav>
    </header>
  );
}

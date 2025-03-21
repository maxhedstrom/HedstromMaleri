import { useState, useEffect, useRef } from "react";
import "../styles/hem.css";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  
    //JavaScript för att ändra färg på footer när den är i viewport, default är vit och när den är i viewport 40% blir den svart
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.intersectionRatio > 0.4);
      },
      {
        threshold: [0, 0.4, 1],
      }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={
        inView
          ? "w-full mt-10 py-10 tektur-unique transition-colors duration-500 bg-black text-white"
          : "w-full mt-10 py-10 tektur-unique transition-colors duration-500 bg-white text-black"
      }
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        <h3 className="text-[40px] md:text-[50px] font-semibold mb-2">KONTAKTA OSS</h3>
        <ul className="text-[17px] p-3.5 space-y-2 md:text-[20px] space-y-1.4 mb-6">
          <li>
            <a
              href="#"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              BESÖKSADRESS
            </a>
          </li>
          <li>
            <a
              href="/kontakt"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              KONTAKTFORMULÄR
            </a>
          </li>
          <li>
            <a
              href="tel:+46736002047"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              TELEFON
            </a>
          </li>
          <li>
            <a
              href="mailto:info@hedstrommaleri.se"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              E-POST
            </a>
          </li>
        </ul>

        <h3 className="text-[40px] md:text-[50px] font-semibold mb-2">TJÄNSTER</h3>
        <ul className="text-[17px] p-3.5 space-y-2 md:text-[20px] space-y-1.4 mb-6">
          <li>
            <a
              href="#"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              MÅLNING OCH TAPETSERING
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              IN OCH UTVÄNDIG MÅLNING VID NY- OCH OMBYGGNATIONER
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              FASADMÅLNING
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              VÅTRUMSMÅLNING
            </a>
          </li>
          <li>
            <a
              href="/rot"
              className={`border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${inView ? "hover:border-white" : "hover:border-black"}`}
            >
              ARBETEN MED ROT-AVDRAG
            </a>
          </li>
        </ul>
      </div>

      <p className="text-center text-sm mt-8">
        2025 © HEDSTRÖM MÅLERI AB - ALLA RÄTTIGHETER RESERVERADE.
      </p>
      <p className="text-center text-sm mt-2 flex items-center justify-center">
        SIDA SKAPAD AV MAX HEDSTRÖM  
        <a href="https://www.linkedin.com/in/max-hedstrom" className="ml-1">
          <FaLinkedin />
        </a>
      </p>
    </footer>
  );
}

export default Footer;

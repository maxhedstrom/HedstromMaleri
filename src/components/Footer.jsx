import { useState, useEffect, useRef } from "react";
import "../styles/hem.css";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  const footerRef = useRef(null); // Referens till footer-elementet i DOM
  const [inView, setInView] = useState(false); // Håller koll på om footern är synlig på skärmen

  useEffect(() => {
    // Skapar en observer för att upptäcka när footern kommer in i vyn
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.intersectionRatio > 0.4); // Ändra färg/stil om footern är minst 40% synlig
      },
      {
        threshold: [0, 0.4, 1], // Anger olika nivåer av synlighet för att trigga
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Börja observera footern
    }

    return () => {
      // Avsluta observern när komponenten avmonteras
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Lista med kontaktlänkar
  const contactLinks = [
    { href: "/kontakt?scrollTo=map", label: "BESÖKSADRESS" },
    { href: "/kontakt", label: "KONTAKTFORMULÄR" },
    { href: "tel:+46736002047", label: "TELEFON" },
    { href: "mailto:info@hedstrommaleri.se", label: "E-POST" },
  ];

  // Lista med tjänster
  const serviceLinks = [
    { href: "/tjanster#tjanst-0", label: "MÅLNING OCH TAPETSERING" },
    { href: "/tjanster#tjanst-1", label: "VÅTRUMSMÅLNING" },
    { href: "/tjanster#tjanst-2", label: "FASADMÅLNING" },
    { href: "/tjanster#tjanst-3", label: "IN OCH UTVÄNDIG MÅLNING VID NY- OCH OMBYGGNATIONER" },
    { href: "/rot", label: "ARBETEN MED ROT-AVDRAG" },
  ];

  // Klassnamn för länkar, justeras beroende på om footern är synlig (för att ändra hover-färg)
  const linkClass = `border-2 border-transparent rounded-md px-4 py-2 inline-block -mx-4 -my-2 transition-colors duration-300 ${
    inView ? "hover:border-white" : "hover:border-black"
  }`;

  return (
    <footer
      ref={footerRef} // Knyter referensen till detta element
      className={
        inView
          ? "w-full mt-10 py-10 tektur-unique transition-colors duration-500 bg-black text-white"
          : "w-full mt-10 py-10 tektur-unique transition-colors duration-500 bg-white text-black"
      }
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        {/* Rubrik och kontaktlänkar */}
        <h3 className="text-[40px] md:text-[50px] font-semibold mb-2">KONTAKTA OSS</h3>
        <ul className="text-[17px] p-3.5 space-y-2 md:text-[20px] space-y-1.4 mb-6">
          {contactLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Rubrik och tjänstelänkar */}
        <h3 className="text-[40px] md:text-[50px] font-semibold mb-2">TJÄNSTER</h3>
        <ul className="text-[17px] p-3.5 space-y-2 md:text-[20px] space-y-1.4 mb-6">
          {serviceLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-8 px-4 text-sm">
  {/* Alltid synlig: Copyright-texten */}
  <p className="text-center">
    2025 © HEDSTRÖM MÅLERI AB - ALLA RÄTTIGHETER RESERVERADE.
  </p>

  {/* Block för skapad-text och länkar i responsivt läge (< md) */}
  <div className="md:hidden flex flex-col items-center mt-2 gap-2">
    {/* Sida skapad av Max med LinkedIn-ikon */}
    <p className="text-center flex items-center justify-center ">
      SIDA SKAPAD AV MAX HEDSTRÖM
      <a
        href="https://www.linkedin.com/in/max-hedstrom"
        className="mt-3.5 text-white"
      >
        <FaLinkedin />
      </a>
    </p>
    {/* Länkar under "Sida skapad" */}
    <div className="flex gap-4">
      <a href="/integritetspolicy" className="text-gray-500 hover:underline">
      INTEGRITETSPOLICY
      </a>
      <a href="/cookies" className="text-gray-500 hover:underline">
        COOKIES
      </a>
    </div>
  </div>
  

  {/* Block för "Sida skapad" i icke-responsivt läge (>= md)
      visas under copyright */}
  <p className="hidden md:block text-center flex flex-nowrap items-center justify-center">
    SIDA SKAPAD AV MAX HEDSTRÖM
    <a
      href="https://www.linkedin.com/in/max-hedstrom"
      className="ml-1 text-white hover:underline inline-flex"
    >
      <FaLinkedin />
    </a>
  </p>
  {/* Länkar i icke-responsivt läge (>= md) som positioneras absolut till höger */}
  <div className="hidden md:flex absolute top-0 right-0 items-center space-x-4">
    <a href="/integritetspolicy" className="text-gray-500 hover:underline">
    INTEGRITETSPOLICY
    </a>
    <a href="/cookies" className="text-gray-500 hover:underline">
      COOKIES
    </a>
  </div>
</div>

    </footer>
  );
}

export default Footer;

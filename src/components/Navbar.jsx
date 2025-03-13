import { useState, useEffect } from "react";
import logo from "../assets/bilder/logo-med-farg.png";
import "../styles/hem.css"; 

export default function Navbar() {

  //JavaScript för att hantera navbar vid skrollande
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //sätter navbar till fixed när användaren scrollar 50% av fönstrets höjd
      if (window.scrollY > window.innerHeight * 0.5 ) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    //håller navbar rätt samt sätter bakgrundsfärgen till grå när navbar går från absolute till fixed
    className={`top-0 left-0 right-0 z-10 w-full py-[10px] transition-all duration-500 ${
      isFixed ? "fixed bg-[#505050]" : "absolute bg-transparent"
    }`}
  >
      <nav className="flex items-center justify-between px-[6%] py-[2%] w-full">
        
        {/* Logotyp */}
        <div className="absolute top-[10px] left-[30px] p-[5px] z-10">
          <a href="/">
            <img id="logo" src={logo} alt="Logotyp" className="w-[150px] h-auto" />
          </a>
        </div>

       {/* Desktop-nav */}
      <div className="hidden md:flex flex-1 justify-end -mt-[30px] gap-[20px]">
        <ul className="flex gap-[20px] list-none m-0 p-0">
          <li className="py-[8px] px-[12px]">
            <a href="/" className=" text-white font-bold text-[22px]">Hem</a>
          </li>
          <li className="py-[8px] px-[12px] text-[24px]">
            <a href="/om" className="text-white font-bold">Om oss</a>
          </li>
          <li className="py-[8px] px-[12px]">
            <a href="/tjanster" className="text-white font-bold text-[22px]">Tjänster</a>
          </li>
          <li className="py-[8px] px-[12px]">
            <a href="/projekt" className="text-white font-bold text-[22px]">Våra projekt</a>
          </li>
          <li className="py-[8px] px-[12px]">
            <a href="/rot" className="text-white font-bold text-[22px]">ROT-Avdrag</a>
          </li>
          <li className="py-[8px] px-[12px]">
            <a href="/kontakt" className="text-white font-bold text-[22px]">Kontakta oss</a>
          </li>
        </ul>
      </div>

      </nav>
    </header>
  );
}

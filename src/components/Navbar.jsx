import { useState, useEffect } from "react";
import logo from "../assets/bilder/logo-med-farg.png";
import "../styles/hem.css"; 

export default function Navbar() {

  // JavaScript för att hantera navbar vid skrollande
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sätter navbar till fixed när användaren scrollar 50% av fönstrets höjd
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let headerClass = "top-0 left-0 right-0 z-10 w-full py-[10px] transition-all duration-500 ";
  if (isFixed) {
    headerClass += "fixed bg-[#505050]";
  } else {
    headerClass += "absolute bg-transparent";
  }

  return (
    <header className={headerClass}>
      {/* Stor logotyp utanför nav, visas när navbaren inte är fast */}
      {!isFixed && (
        <div className="absolute top-[10px] left-[30px] p-[5px] z-20">
          <a href="/">
            <img
              src={logo}
              alt="Logotyp"
              className="w-[150px] h-auto transition-all duration-500"
            />
          </a>
        </div>
      )}

      <nav className="relative flex items-center justify-between px-[6%] py-[2%] w-full">
        {/* Liten logotyp inuti nav, visas när navbaren är fast (scrollad) */}
        {isFixed && (
          <div className="absolute top-[0px] left-[30px] p-[5px] z-20">
            <a href="/">
              <img
                src={logo}
                alt="Logotyp"
                className="w-[100px] h-auto transition-all duration-500"
              />
            </a>
          </div>
        )}

        {/* Desktop-nav */}
        <div className="hidden md:flex flex-1 justify-end ">
          <ul className="flex gap-[0px] list-none ">
            <li className="py-[8px] px-[12px]">
              <a href="/" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">Hem</a>
            </li>
            <li className="py-[8px] px-[12px] text-[16px]">
              <a href="/om" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">Om oss</a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a href="/tjanster" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">Tjänster</a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a href="/projekt" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">Våra projekt</a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a href="/rot" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">ROT-Avdrag</a>
            </li>
            <li className="py-[8px] px-[0px]">
              <a href="/kontakt" className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2">Kontakta oss</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

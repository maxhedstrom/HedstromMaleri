import { useState, useEffect } from "react";
import logo from "../assets/bilder/logo-med-farg.png";
import "../styles/hem.css"; 
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && window.scrollY < lastScrollY) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  let headerClass = "top-0 left-0 right-0 z-10 w-full py-[10px] transition-all duration-500 ";
  if (isFixed) {
    headerClass += "fixed bg-[#505050]";
  } else {
    headerClass += "absolute bg-transparent";
  }

  return (
    <header className={headerClass}>
      {/* Stor logotyp utanför nav */}
      {!isFixed && (
  <div className="absolute top-[10px] left-[30px] p-[5px] z-20 hidden md:block">
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
        {/* Liten logotyp när navbaren är fast */}
        {isFixed && (
          <div className="absolute top-[0px] left-[30px] -m-1 z-20 hidden md:block">
            <a href="/">
              <img src={logo} alt="Logotyp" className="w-[100px] h-auto transition-all duration-500" />
            </a>
          </div>
        )}


        {/* Desktop-nav */}
        <div className="hidden md:flex flex-1 justify-end">
          <ul className="flex gap-[0px] list-none">
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

        {/* Mobil-nav */}

        {/* Alternaitv 1 - kapad logga */}
      {/* <div className="text-white text-2xl font-bold  left-6 top-4 md:hidden">
      <a href="/">
              <img src="src/assets/bilder/responsive-logo.png" 
               alt="Logotyp" 
               className="w-[100px] h-auto transition-all duration-500" />
            </a>
      </div> */}

      {/* Alternativ 2 - full logga */}
        <div className="text-white text-2xl font-bold  left-6 top-4 md:hidden">
      <a href="/">
              <img         
              src={logo}
              alt="Logotyp" 
              className="w-[60px] h-auto transition-all duration-500" />
            </a>
      </div>

        {/* alternativ 3 - text */}
      {/* <div className="text-white text-2xl font-bold md:hidden">
      <a href="/">
        Hedström Måleri AB
        </a>

        </div> */}


      {/* Hamburgermeny för mobila enheter */}
      <div className="md:hidden absolute right-12 top-6 z-20">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Mobil meny som visas vid klick */}
      <div
  className={`absolute top-0 left-0 w-full h-screen bg-[#505050] flex flex-col items-center justify-center transform transition-transform duration-300 
  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden z-10`}
>
  {/* Bild högst upp */}
  <img 
    src={logo} 
    alt="Hedström Måleri AB" 
    className="w-32 h-auto -mt-20 mb-20 mr-4  "
  />

  <ul className="text-white text-[20px] font-bold space-y-6">
    <li><a href="/" onClick={() => setIsMenuOpen(false)}>Hem</a></li>
    <li><a href="/om" onClick={() => setIsMenuOpen(false)}>Om oss</a></li>
    <li><a href="/tjanster" onClick={() => setIsMenuOpen(false)}>Tjänster</a></li>
    <li><a href="/projekt" onClick={() => setIsMenuOpen(false)}>Våra projekt</a></li>
    <li><a href="/rot" onClick={() => setIsMenuOpen(false)}>ROT-Avdrag</a></li>
    <li><a href="/kontakt" onClick={() => setIsMenuOpen(false)}>Kontakta oss</a></li>
  </ul>
</div>

      </nav>
    </header>
  );
}

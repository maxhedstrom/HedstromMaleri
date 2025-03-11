import { useState } from "react";
import logo from "../assets/bilder/logo-med-farg.png";
import "../styles/hem.css"; 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-[30px] left-0 right-0 z-10 w-full py-[10px]">
      <nav className="flex items-center justify-between px-[6%] py-[2%] w-full">
        {/* Logotyp – fast positionerad i övre vänstra hörnet */}
        <div className="fixed top-[10px] left-[30px] p-[5px] z-10">
          <a href="/">
            <img id="logo" src={logo} alt="Logotyp" className="w-[150px] h-auto" />
          </a>
        </div>

        {/* Desktop - navigationslänkar */}
        <div className="hidden md:flex flex-1 justify-end -mt-[30px] gap-[20px]">
          <ul className="flex gap-[20px] list-none m-0 p-0">
            <li className="py-[8px] px-[12px]">
              <a
                href="/"
                className="no-underline text-[13px] text-white font-bold hover:text-white !important"
              >
                Hem
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/om"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Om oss
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/tjanster"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Tjänster
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/projekt"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Våra projekt
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/rot"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                ROT-Avdrag
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/kontakt"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </div>

        {/* Mobil - navigationslänkar */}
        <div
          className={`md:hidden fixed top-0 mt-[50px] p-[20px] transition-all duration-500 ease-in-out z-50 bg-[#f44336] w-[200px] h-screen text-left ${
            menuOpen ? "right-0" : "right-[-220px]"
          }`}
        >
          <i
            className="fas fa-times absolute top-[15px] right-[15px] text-[22px] text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          ></i>
          <ul className="flex flex-col gap-[15px] list-none m-0 p-0">
            <li className="py-[8px] px-[12px]">
              <a
                href="/"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Hem
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/om"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Om oss
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/tjanster"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Tjänster
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/projekt"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Våra projekt
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/rot"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                ROT-Avdrag
              </a>
            </li>
            <li className="py-[8px] px-[12px]">
              <a
                href="/kontakt"
                className="no-underline text-[13px] text-white font-bold hover:text-white"
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburgerikon - visas endast på mobil */}
        <i
          className="fas fa-bars md:hidden text-white text-[24px] cursor-pointer absolute right-[20px] top-[15px] z-50"
          onClick={() => setMenuOpen(true)}
        ></i>
      </nav>
    </header>
  );
}

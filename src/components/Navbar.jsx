import { useState, useEffect } from "react";
import "../styles/hem.css"; 
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "../components/ui/Navlink";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAuth = localStorage.getItem("isAdminAuthenticated");
    setIsAuthenticated(savedAuth === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    setIsAuthenticated(false);
    setIsMenuOpen(false);
    navigate("/"); // Skicka till startsidan efter logout
  };

  const navLinks = [
    { href: "/admin", label: "Admin", requiresAuth: true },
    { href: "/", label: "Hem" },
    { href: "/om", label: "Om oss" },
    { href: "/tjanster", label: "Tjänster" },
    { href: "/projekt", label: "Våra projekt" },
    { href: "/rot", label: "ROT-Avdrag" },
    { href: "/kontakt", label: "Kontakta oss" },
  ].filter(link => !link.requiresAuth || isAuthenticated);

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
    headerClass += "fixed bg-[rgba(0,0,0,0.2)] shadow-lg backdrop-blur-md";
  } else {
    headerClass += "absolute bg-transparent";
  }

  return (
    <header className={headerClass}>
      {/* Stor logotyp utanför nav */}
      {!isFixed && (
        <div className="absolute top-[10px] left-[30px] p-[5px] z-20 hidden min-[948px]:block">
          <a href="/">
            <img
              src="/logo-med-farg.png"
              alt="Logotyp"
              className="w-[150px] h-auto transition-all duration-500"
            />
          </a>
        </div>
      )}

      <nav className="relative flex items-center justify-between px-[6%] py-[2%] w-full">
        {/* Liten logotyp när navbaren är fast */}
        {isFixed && (
          <div className="absolute top-[0px] left-[30px] -m-1 z-20 hidden min-[948px]:block">
            <a href="/">
              <img
                src="/logo-med-farg.png"
                alt="Logotyp"
                className="w-[100px] h-auto transition-all duration-500"
              />
            </a>
          </div>
        )}

        {/* Desktop-nav: visar från 948px */}
        <div className="hidden min-[948px]:flex flex-1 justify-end items-center gap-4">
          <ul className="flex gap-[0px] list-none">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`py-[8px] px-[${index === navLinks.length - 1 ? "0px" : "12px"}]`}
              >
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          {/* Logga ut-länk visas endast om inloggad */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2 cursor-pointer"
            >
              Logga ut
            </button>
          )}
        </div>

        {/* Mobil-nav-logga: visar under 948px */}
        <div className="text-white text-2xl font-bold left-6 top-4 max-[948px]:block hidden">
          <a href="/">
            <img
              src="/logo-med-farg.png"
              alt="Logotyp"
              className="w-[60px] h-auto transition-all duration-500"
            />
          </a>
        </div>

        {/* Hamburgermeny för mobila enheter */}
        <div className="absolute right-12 top-6 z-20 max-[948px]:block hidden">
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
          className={`fixed top-0 left-0 w-full h-screen bg-[#505050] flex flex-col items-center justify-center transform transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} max-[948px]:flex hidden z-10`}
        >
          {/* Bild högst upp */}
          <img
            src="/logo-med-farg.png"
            alt="Hedström Måleri AB"
            className="w-32 h-auto -mt-20 mb-20 mr-4"
          />
          {/* Länkar i mobilmenyn */}
          <ul className="text-white text-[20px] font-bold space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Logga ut som länk i mobilmenyn */}
            {isAuthenticated && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white font-bold text-[20px]"
                >
                  Logga ut
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

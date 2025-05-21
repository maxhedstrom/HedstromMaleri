import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function AdminPanel() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <nav className="flex flex-col space-y-4">
      <NavLink
        to="homeServices"
        className={({ isActive }) =>
          isActive ? "text-white font-semibold" : "text-black hover:underline"
        }
        onClick={() => setMenuOpen(false)}
      >
        Hantera tjänster [Hem]
      </NavLink>
      <NavLink
        to="personal"
        className={({ isActive }) =>
          isActive ? "text-white font-semibold" : "text-black hover:underline"
        }
        onClick={() => setMenuOpen(false)}
      >
        Hantera personal [Om oss]
      </NavLink>
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive ? "text-white font-semibold" : "text-black hover:underline"
        }
        onClick={() => setMenuOpen(false)}
      >
        Hantera tjänster [Tjänster]
      </NavLink>
      <NavLink
        to="projekt"
        className={({ isActive }) =>
          isActive ? "text-white font-semibold" : "text-black hover:underline"
        }
        onClick={() => setMenuOpen(false)}
      >
        Hantera projekt [Våra projekt]
      </NavLink>
      <NavLink
        to="kontakt"
        className={({ isActive }) =>
          isActive ? "text-white font-semibold" : "text-black hover:underline"
        }
        onClick={() => setMenuOpen(false)}
      >
        Hantera kontaktinfo [Kontakta oss]
      </NavLink>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url("images/slottet.webp")`,
          }}
      >
        
        <h1 className="text-white text-4xl font-bold drop-shadow-xl">
          Välkommen till Adminpanelen!
        </h1>
      </header>

      {/* ADMIN PANEL */}
      <div className="flex flex-1 w-full">
        {/* SIDOMENY DESKTOP */}
        <aside className="hidden lg:block w-64 bg-[var(--text-color)] border-r p-6 sticky top-0 h-screen">
          <h2 className="text-xl text-white font-bold mb-6">Adminpanel</h2>
          {navLinks}
        </aside>

        {/* MOBILMENYKNAPP */}
        <div className="lg:hidden px-4 py-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white bg-[var(--text-color)] p-2 rounded-md shadow-md"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* MOBIL SIDOMENY */}
        {menuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-64 h-full bg-[var(--text-color)] p-6 z-40 shadow-2xl">
            <h2 className="text-xl text-white font-bold mb-6">Adminpanel</h2>
            {navLinks}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
                aria-label="Stäng meny"
              >
                <FaTimes size={24} />
              </button>
            </div>
          </div>
        )}

        {/* HUVUDINNEHÅLL */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;

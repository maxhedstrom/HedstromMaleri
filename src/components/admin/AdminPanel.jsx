import { Link, Outlet, NavLink } from "react-router-dom";
import slottet from "../../assets/bilder/slottet.jpg";


function AdminPanel() {
  return (
  <> 
    
    <header
        className="relative min-h-[60vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(${slottet})`,
        }}
      >
        <h1 className="text-white text-4xl font-bold drop-shadow-xl">
          Välkommen till Adminpanelen! <br /> <br />
        </h1>
      </header>
    
    <div className="flex h-screen">   
          {/* SIDOMENY */}
        <aside className="w-64 bg-[var(--text-color)] border-r p-6">
          <h2 className="text-xl text-white font-bold mb-6">Adminpanel</h2>

          <nav className="flex flex-col space-y-4">
            <NavLink
              to="homeServices"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "text-black hover:underline"
              }
            >
              Hantera tjänster [Hem]
            </NavLink>

            <NavLink
              to="personal"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "text-black hover:underline"
              }
            >
              Hantera personal [Om oss] 
            </NavLink>
            
            <NavLink
              to="services"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "text-black hover:underline"
              }
            >
              Hantera tjänster [Tjänster]
            </NavLink>

            
            <NavLink
              to="projekt"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "text-black hover:underline"
              }
            >
              Hantera projekt [Våra projekt]
            </NavLink>

            <NavLink
              to="kontakt"
              className={({ isActive }) =>
                isActive ? "text-white font-semibold" : "text-black hover:underline"
              }
            >
              Hantera kontaktinfo [Kontakta oss]
            </NavLink>
          </nav>
          
        </aside>

            {/* HUVUDINNEHÅLL */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
     </div>
  </>
  );
}

export default AdminPanel;

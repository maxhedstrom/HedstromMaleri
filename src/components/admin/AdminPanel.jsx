import { Link, Outlet, NavLink } from "react-router-dom";

function AdminPanel() {
  return (
  <> 
    <header
      className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-xl">
        Välkommen till Adminpanelen! <br /> <br />
        {/* <h2 className="text-white text-3xl font-bold drop-shadow-xl">
          Observera att du alltid måste trycka på spara-ändringar knappen <br /> oavsett om raderar, ändrar eller lägger till något nytt. 
        </h2> */}
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

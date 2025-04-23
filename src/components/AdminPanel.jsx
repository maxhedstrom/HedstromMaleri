import { Link, Outlet } from "react-router-dom";

function AdminPanel() {
  return (
<> 
  <header
    className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/slottet.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center px-4 text-center"> <h1 className="text-white text-4xl font-bold drop-shadow-xl">Adminpanel</h1> 
  </header> <div className="flex h-screen">   
     {/* SIDOMENY */}
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold mb-6">Adminpanel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="services" className="text-blue-600 hover:underline">Hantera tjänster</Link>
          <Link to="personal" className="text-blue-600 hover:underline">Hantera personal</Link>
        </nav>
      </aside>

      {/* HUVUDINNEHÅLL */}
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-100 p-4 shadow">
          <h1 className="text-xl font-bold">Adminpanel</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  );
}

export default AdminPanel;

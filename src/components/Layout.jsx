import { Outlet } from "react-router-dom";  
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {  
  return (
    <>
      {/* Denna komponent styr ordningen på alla sidor – först navbar, sedan sidinnehåll, sist footer */}
      <Navbar />
      <main>
        {/* Här renderas barnkomponenter beroende på route – t.ex. sidor från pages/ */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

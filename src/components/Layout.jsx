import { Outlet } from "react-router-dom";  
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout() {  
 return (
  <>
    <Navbar />
    <main>
      
        <Outlet /> {/* This is where the child routes will be rendered */}
    </main>
    <Footer />
  </>
  

);
}
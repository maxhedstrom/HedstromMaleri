import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Hem from './pages/Hem';
import Kontakt from './pages/Kontakt';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Tjanster from './pages/Tjanster';
import Rot from './pages/Rot';
import Integritetspolicy from './pages/integritetspolicy';
import AdminPanel from "./components/AdminPanel"; 
import PasswordProtectedRoute from "./components/PasswordProtectedRoute";




function App() {
    return (
        <Routes>
            {/* Layout omsluter alla sidor */}
                <Route path="/" element={<Layout />}>
                <Route index element={<Hem />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="om" element={<Om />} />
                <Route path="projekt" element={<Projekt />} />
                <Route path="rot" element={<Rot/>} />
                <Route path="tjanster" element={<Tjanster />} />
                <Route path="integritetspolicy" element={<Integritetspolicy />} />
                <Route path="/admin" element={<AdminPanel />} />

                {/* AVKOMMENTERA NEDAN NÄR DU VILL HA LÖSENORDSSKYDDAD ADMINPANEL */}
                {/* <Route path="/admin" element={<PasswordProtectedRoute  />} /> */}



            </Route>
        </Routes>
    );
}

export default App;

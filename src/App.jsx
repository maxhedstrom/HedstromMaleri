// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Hem from './pages/Hem';
import Kontakt from './pages/Kontakt';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Tjanster from './pages/Tjanster';
import Rot from './pages/Rot';
import Integritetspolicy from './pages/integritetspolicy';

import AdminPanel from "./components/admin/AdminPanel"; 
// import PasswordProtectedRoute from "./components/PasswordProtectedRoute";
import HomeServicesAdmin from "./pages/admin/HomeServicesAdmin";
import PersonalAdmin from "./pages/admin/PersonalAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import ProjektAdmin from "./pages/admin/ProjektAdmin";
import KontaktAdmin from "./pages/admin/KontaktAdmin";


function App() {
  return (
    <Routes>
      {/* Allmän layout för publika sidor */}
      <Route path="/" element={<Layout />}>
        <Route index                    element={<Hem />} />
        <Route path="kontakt"           element={<Kontakt />} />
        <Route path="om"                element={<Om />} />
        <Route path="projekt"           element={<Projekt />} />
        <Route path="rot"               element={<Rot />} />
        <Route path="tjanster"          element={<Tjanster />} />
        <Route path="integritetspolicy" element={<Integritetspolicy />} />

        {/*
          Admin-routes:
          /admin           → redirect till /admin/services
          /admin/services  → ServicesAdmin inuti AdminPanel-layout
        */}
        <Route
          path="admin"
          element={
            /* 
              Byt till PasswordProtectedRoute när du vill lösenordsskydda:
              <PasswordProtectedRoute>
                <AdminPanel />
              </PasswordProtectedRoute>
            */
            <AdminPanel />
          }
        >
          {/* /admin → /admin/services */}
          <Route
            index
            element={<Navigate to="HomeServices" replace />}
          />
          
          {/* /admin/services */}
          <Route path="HomeServices" element={<HomeServicesAdmin />} />
          <Route path="personal" element={<PersonalAdmin />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="projekt" element={<ProjektAdmin />} />
          <Route path="kontakt" element={<KontaktAdmin />} />



        </Route>
      </Route>
    </Routes>
  );
}

export default App;

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
import ServicesAdmin from "./pages/ServicesAdmin";
import PersonalAdmin from "./pages/PersonalAdmin";

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
            element={<Navigate to="services" replace />}
          />
          
          {/* /admin/services */}
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="personal" element={<PersonalAdmin />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;

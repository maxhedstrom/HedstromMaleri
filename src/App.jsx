import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout';
import PasswordProtectedRoute from "./components/admin/PasswordProtectedRoute";

import Hem from './pages/Hem';
import Kontakt from './pages/Kontakt';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Tjanster from './pages/Tjanster';
import Rot from './pages/Rot';
import Integritetspolicy from './pages/integritetspolicy';
import NotFound from "./pages//NotFound.jsx";

import HomeServicesAdmin from "./pages/admin/HomeServicesAdmin";
import PersonalAdmin from "./pages/admin/PersonalAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import ProjektAdmin from "./pages/admin/ProjektAdmin";
import KontaktAdmin from "./pages/admin/KontaktAdmin";
import { lazy, Suspense } from "react";

// Lazy load admin panel för bättre prestanda
const AdminPanel = lazy(() => import("./components/admin/AdminPanel"));

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
        <Route path="*" element={<NotFound />} />
      
       {/* Skyddade admin-routes */}
        <Route
          path="admin"
          element={
         <Suspense fallback={<div>Laddar adminpanelen...</div>}>
            <PasswordProtectedRoute>
              <AdminPanel />
            </PasswordProtectedRoute>
          </Suspense>
          }
        >
          <Route index element={<Navigate to="homeServices" replace />} />
          <Route path="homeServices" element={<HomeServicesAdmin />} />
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

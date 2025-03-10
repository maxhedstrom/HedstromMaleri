import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Hem from './pages/Hem';
import Kontakt from './pages/Kontakt';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Tjanster from './pages/Tjanster';

function App() {
    return (
        <Routes>
            {/* Layout omsluter alla sidor */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Hem />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="om" element={<Om />} />
                <Route path="projekt" element={<Projekt />} />
                <Route path="tjanster" element={<Tjanster />} />
            </Route>
        </Routes>
    );
}

export default App;

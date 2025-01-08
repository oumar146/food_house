import Home from './pages/Home'; // Importation de votre page Home
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Utilisation de Navigate pour redirections
import './styles/global.css'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Définir la route principale */}
        <Route path="/" element={<Home />} />
        
        {/* Redirection si quelqu'un accède à "/home" */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        
        {/* Ajouter une route 404 par défaut si aucune correspondance n'est trouvée */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import Home from './pages/Home';
import Menu from './pages/Menu'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Utilisation de Navigate pour redirections
import './styles/global.css'


const Router = () => {

  // Définir les routes
const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/menu/:category", element: <Menu/> },
];

  return (
    <BrowserRouter>
      <Routes>
          {/* Routes protégées */}
          {routes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={element}
            />
          ))}
        
        {/* Ajouter une route 404 par défaut si aucune correspondance n'est trouvée */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

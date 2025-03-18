import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import { useParams, NavLink } from "react-router-dom";
import "../styles/menu.css";
import menuData from "../data/menuData.json";
import grayPlaceholder from "../assets/gray_placeholder_800x800.png";

const CartItems = () => {
  const { category } = useParams(); // Récupère la catégorie depuis l'URL

  // Récupère les menus correspondant à la catégorie ou un tableau vide si la catégorie n'existe pas
  const menus = menuData[category] || [];

  return (
    <div>
      <div className="menu-cards">
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={`/cart/${category}/${menu.name}`}
            className="menu-card"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={menu.image || grayPlaceholder} alt={menu.name} title={menu.name} />
            <h5 className="name">{menu.name}</h5>
            <p className="price">{menu.price}</p>
          </NavLink>
        ))}
      </div>
      {menus.length === 0 && (
        <p className="error-message">
          Aucun menu disponible pour cette catégorie.
        </p>
      )}
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CartItems />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Menu;

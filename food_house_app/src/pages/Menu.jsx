import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import "../styles/menu.css";

const Cart = () => {
  const { category } = useParams(); // Récupère la catégorie depuis l'URL

  // Données des menus par catégorie
  const menuData = {
    salades: [
      {
        name: "Salade César",
        image: "https://via.placeholder.com/150",
        price: "8€",
      },
      {
        name: "Salade Niçoise",
        image: "https://via.placeholder.com/150",
        price: "7€",
      },
    ],
    pizzas: [
      {
        name: "Margherita",
        image: "https://via.placeholder.com/150",
        price: "10€",
      },
      {
        name: "Pepperoni",
        image: "https://via.placeholder.com/150",
        price: "12€",
      },
    ],
    burgers: [
      {
        name: "Burger Classique",
        image: "https://via.placeholder.com/150",
        price: "9€",
      },
      {
        name: "Burger Vegan",
        image: "https://via.placeholder.com/150",
        price: "11€",
      },
      {
        name: "Burger Classique",
        image: "https://via.placeholder.com/150",
        price: "9€",
      },
      {
        name: "Burger Vegan",
        image: "https://via.placeholder.com/150",
        price: "11€",
      },
      {
        name: "Burger Classique",
        image: "https://via.placeholder.com/150",
        price: "9€",
      },
      {
        name: "Burger Vegan",
        image: "https://via.placeholder.com/150",
        price: "11€",
      },
      {
        name: "Burger Classique",
        image: "https://via.placeholder.com/150",
        price: "9€",
      },
      {
        name: "Burger Vegan",
        image: "https://via.placeholder.com/150",
        price: "11€",
      },
    ],
    // Ajoutez d'autres catégories ici
  };

  // Récupère les menus correspondant à la catégorie ou un tableau vide si la catégorie n'existe pas
  const menus = menuData[category] || [];

  return (
    <div>
      <div className="menu-cards">
        {menus.map((menu, index) => (
          <div key={index} className="menu-card">
            <img src={menu.image} alt={menu.name} />
            <h5 className="name">{menu.name}</h5>
            <p className="price">{menu.price}</p>
          </div>
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
      <Cart />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Menu;

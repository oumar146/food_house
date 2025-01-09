import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import "../styles/pizzaDetails.css";

// Import du fichier JSON
import menuData from "../data/menuData.json";

const PizzaDetails = () => {
  const { category, productName } = useParams(); // Récupère la catégorie et le nom de la pizza
  console.log(category, productName);

  const selectedPizza =
    menuData[category]?.find((pizza) => pizza.name === productName) || null;

  if (!selectedPizza) {
    return <p>Pizza introuvable</p>;
  }

  return (
    <div>
      <Header />
      <div className="pizza-details">
        <img src={selectedPizza.image} alt={selectedPizza.name} />
        <div className="details">
          <h3>{selectedPizza.name}</h3>
          <p>
            <span>Prix : </span>
            {selectedPizza.price}
          </p>
          <p>
            <span>Description : </span>
            {selectedPizza.description}
          </p>
          <p>
            <span>Ingrédients :</span>{" "}
            {selectedPizza.ingredients?.join(", ") || "Non spécifiés"}
          </p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PizzaDetails;

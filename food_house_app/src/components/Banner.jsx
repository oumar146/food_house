import { useParams } from 'react-router-dom';
import '../styles/banner.css';

const Banner = () => {
  const { category } = useParams(); // Récupère le paramètre depuis l'URL

  // Objet de configuration pour la bannière
  const bannerConfig = {
    salades: {
      image: "https://resize.elle.fr/original/var/oa/content/images/tests/original/1415_test-1670866690.jpg",
      text: "Nos salades",
    },
    pizzas: {
      image: "https://rs-menus-api.roocdn.com/images/9f6402d3-2006-4a70-ba08-49e8395320c1/image.jpeg",
      text: "Nos pizzas",
    },
    burgers: {
      image: "https://i.pinimg.com/originals/26/3a/6e/263a6eb044289b51933c6c2459041f10.jpg",
      text: "Nos burgers",
    },
    seafood: {
      image: "https://previews.123rf.com/images/primopiano/primopiano1705/primopiano170500430/77884356-fond-de-fruits-de-mer-avec-des-plats-d%C3%A9licieux.jpg",
      text: "Nos fruits de mer",
    },
    boissons: {
      image: "https://as1.ftcdn.net/v2/jpg/01/58/23/40/1000_F_158234051_x1Mw49rCAUBEgiTQXmagMYx14k4mdpXR.jpg",
      text: "Nos boissons",
    },
    desserts: {
      image: "https://images5.alphacoders.com/969/thumb-1920-969149.jpg",
      text: "Nos desserts",
    },
  };

  // Configuration par défaut si la catégorie n'existe pas
  const defaultBanner = {
    image: "https://via.placeholder.com/370x278",
    text: "Bienvenue !",
  };

  // Récupère la configuration correspondant à la catégorie ou la valeur par défaut
  const { image, text } = bannerConfig[category] || defaultBanner;

  return (
    <div className="banner">
      <img src={image} alt={category || "Bannière"} />
      <div className="banner-text">{text}</div>
    </div>
  );
};

export default Banner;

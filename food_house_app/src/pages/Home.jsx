import Header from "../components/Header";
import Diaporama from "../components/Diaporama";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Header />
      <Diaporama/>
      <MenuSection/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;

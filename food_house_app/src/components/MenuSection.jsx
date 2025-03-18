import "../styles/MenuSection.css";
import { NavLink } from "react-router-dom";
import menuData from "../data/menuData.json";
import grayPlaceholder from "../assets/gray_placeholder_800x800.png";

const MenuSection = () => {

  return (
    <section id="menu">
      <h4 className="section-title">Notre menu</h4>
      <div className="menu-grid">
        {menuData.menuCategories.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className="menu-item"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={item.bgImage || grayPlaceholder} alt={item.title} title={item.title} />
            <h5 className="title">{item.title}</h5>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

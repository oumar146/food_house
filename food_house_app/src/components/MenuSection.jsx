import "../styles/MenuSection.css";
import { NavLink } from "react-router-dom";

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      title: "Salades",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-1-370x278.jpg",
      route: "/cart/salades",
    },
    {
      id: 2,
      title: "Pizzas",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-2-370x278.jpg",
      route: "/cart/pizzas",
    },
    {
      id: 3,
      title: "Burgers",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-3-370x278.jpg",
      route: "/cart/burgers",
    },
    {
      id: 4,
      title: "Boissons",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-5-370x278.jpg",
      route: "/cart/boissons",
    },
    {
      id: 5,
      title: "Desserts",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-4-370x278.jpg",
      route: "/cart/desserts",
    },
  ];

  return (
    <section id="menu">
      <h4 className="section-title">Notre menu</h4>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className="menu-item"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={item.bgImage} alt={item.title} />
            <h5 className="title">{item.title}</h5>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

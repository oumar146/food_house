import "../styles/MenuSection.css";

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      title: "Salades",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-1-370x278.jpg"
    },
    {
      id: 2,
      title: "Pizzas",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-2-370x278.jpg"
    },

    {
      id: 3,
      title: "Burgers",
      bgImage: "https://livedemo00.template-help.com/wt_prod-19362/images/menu-3-370x278.jpg"
    },
    {
      id: 4,
      title: "seafood",
      bgImage: "https://livedemo00.template-help.com/wt_prod-19362/images/menu-6-370x278.jpg"
    },
    {
      id: 5,
      title: "Boissons",
      bgImage:
        "	https://livedemo00.template-help.com/wt_prod-19362/images/menu-5-370x278.jpg"
    },
    {
      id: 6,
      title: "Desserts",
      bgImage:
        "https://livedemo00.template-help.com/wt_prod-19362/images/menu-4-370x278.jpg"
    },
  ];

  return (
    <section id="menu">
      <h4 className="section-title">Notre menu</h4>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-item">
          <img key={item.id} src={item.bgImage} alt={item.title} />
          <h5 className="title">{item.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

import { useNavigate, useLocation } from "react-router-dom";

const scrollToAnchor = (anchor) => {
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLinkWithScroll = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault(); // Empêche la navigation par défaut
    const [path, hash] = to.split("#");

    if (location.pathname === path) {
      // Si on est déjà sur la bonne page, juste scroller
      scrollToAnchor(`#${hash}`);
    } else {
      // Sinon, naviguer vers la page et scroller après le rendu
      navigate(path);
      setTimeout(() => scrollToAnchor(`#${hash}`), 100); // Petit délai pour attendre le rendu
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default NavLinkWithScroll;

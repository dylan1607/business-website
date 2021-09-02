import { Link } from "react-router-dom";

const NavbarItem = ({ title, to }) => {
  return (
    <Link className="no-underline" to={to}>
      <p>{title}</p>
    </Link>
  );
};

export default NavbarItem;

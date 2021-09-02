import { Link } from "react-router-dom";

const NavbarItem = ({ title, to }) => {
  return (
    <div
      className="flex items-center px-4 rounded-lg h-10 hover:bg-blue-500
    hover:text-white"
    >
      <Link className="text-xl no-underline" to={to}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default NavbarItem;

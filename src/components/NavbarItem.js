import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/outline";
const NavbarItem = ({ title, path, dropdown }) => {
  return (
    <div
      className="flex items-center px-4 rounded-lg h-10 hover:bg-blue-500
    hover:text-white"
    >
      {path && (
        <Link className="text-xl no-underline" to={path}>
          <p>{title}</p>
        </Link>
      )}
      {dropdown && (
        <div className="dropdown dropdown-start dropdown-hover cursor-pointer">
          <div tabIndex="0" className="flex items-center space-x-2">
            <p className="text-xl">{title}</p>
            <ChevronDownIcon height={20} />
          </div>
          <ul
            tabIndex="0"
            className="p-2 menu dropdown-content rounded w-60
            text-black bg-gray-200"
          >
            <li>
              <Link to="/">CNC</Link>
            </li>
            <li>
              <Link to="/">3D Printer</Link>
            </li>
            <li>
              <Link to="/">Other</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;

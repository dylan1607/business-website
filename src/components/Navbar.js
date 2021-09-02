import logo from "../statics/logo.svg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 sticky top-0 z-100 h-81 bg-white">
      {/* Left */}
      <Link className="flex items-center no-underline" to="/">
        <img className="text-black" src={logo} alt="" srcset="" />
        <h2>TinCNC</h2>
      </Link>

      {/* Right */}
      <div className="flex">
        <NavbarItem title="Home" to={"/home"} />
      </div>
    </div>
  );
};

export default Navbar;

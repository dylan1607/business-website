import logo from "../statics/logo.svg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center px-10 md:px-5 py-5 sticky top-0 z-100 
     bg-white lg:px-5 shadow-md"
    >
      {/* Left */}
      <Link className="flex items-center no-underline" to="/">
        <img className="text-black" src={logo} alt="" srcset="" />
        <p className=" text-2xl">TinCNC</p>
      </Link>

      {/* Right */}
      <div className="flex items-center space-x-2 lg:space-x-20">
        <NavbarItem title="Home" to={"/home"} />
        <NavbarItem title="Services" to={"/services"} />
        <NavbarItem title="About" to={"/about"} />
        <NavbarItem title="Contact" to={"/contact"} />
        <div
          className="text-xl font-bold text-blue-500 p-2 cursor-pointer 
          border-2 border-blue-500 px-4 hover:bg-gray-100"
        >
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

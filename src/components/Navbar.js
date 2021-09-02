import logo from "../statics/logo.svg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = ({ click }) => {
  return (
    <div
      className="flex justify-between items-center p-4 sticky top-0 z-100 
     bg-white shadow-md"
    >
      {/* Left */}
      <Link className="flex items-center no-underline" to="/">
        <img className="text-black" src={logo} alt="" srcset="" />
        <p className=" text-xl">TinCNC</p>
      </Link>

      {/* Right */}
      <div className="flex items-center">
        <div className="hidden md:flex items-center space-x-2 lg:space-x-10">
          <NavbarItem title="Home" to={"/home"} />
          <NavbarItem title="Services" to={"/services"} />
          <NavbarItem title="About" to={"/about"} />
          <NavbarItem title="Contact" to={"/contact"} />
        </div>
        <div
          className="font-bold text-blue-500 p-2 cursor-pointer 
        border-2 border-blue-500 px-4 hover:bg-gray-100 mx-4"
        >
          <p>Login</p>
        </div>
        {/* Hamburger Menu */}
        <div
          className="w-6 h-4 flex flex-col justify-between items-center
          md:hidden "
          onClick={click}
        >
          <div className="w-full h-1 bg-gray-500"> </div>
          <div className="w-full h-1 bg-gray-500"> </div>
          <div className="w-full h-1 bg-gray-500"> </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

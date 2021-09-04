import logo from "../statics/logo.svg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = ({ click }) => {
  return (
    <div
      className="flex justify-between items-center p-4 sticky top-0 z-10 
     bg-white shadow-md no-underline"
    >
      {/* Left */}
      <Link className="flex items-center no-underline" to="/">
        <img className="text-black" src={logo} alt="" />
        <p className=" text-xl">TinCNC</p>
      </Link>

      {/* Right */}
      <div className="flex items-center">
        <div className="hidden md:flex items-center space-x-2 lg:space-x-10">
          <NavbarItem title="Home" path={"/"} />
          <NavbarItem title="Capabilites" dropdown />
          <NavbarItem title="About" path={"/about"} />
          <NavbarItem title="Contact" path={"/contact"} />
        </div>
        <div
          className="font-bold text-blue-500 p-2 cursor-pointer 
        border-2 border-blue-500 px-4 hover:bg-gray-100 mx-4"
        >
          <Link to="/login">Login</Link>
        </div>
        {/* Hamburger Menu */}
        {/* <div
          className="w-6 h-4 flex flex-col justify-between items-center
          md:hidden "
          onClick={click}
        >
          <div className="w-full h-1 bg-gray-500"> </div>
          <div className="w-full h-1 bg-gray-500"> </div>
          <div className="w-full h-1 bg-gray-500"> </div>
        </div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current md:hidden"
          onClick={click}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

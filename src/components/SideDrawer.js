import logo from "../statics/logo.svg";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const SideDrawer = ({ show, click }) => {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center top-0 left-0 z-30 
     bg-gray-100 w-52 h-screen transition-all ease-in-out duration-300 transform
     no_underline ${show ? "translate-x-0" : "-translate-x-full"}`}
      onClick={click}
    >
      {/* top */}
      <Link className="absolute top-20 flex items-center no-underline" to="/">
        <img className="text-black" src={logo} alt="" srcset="" />
        <p className=" text-xl">TinCNC</p>
      </Link>

      {/* bottom */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center space-y-4">
          <NavbarItem title="Home" to={"/"} />
          <NavbarItem title="Services" to={"/services"} />
          <NavbarItem title="About" to={"/about"} />
          <NavbarItem title="Contact" to={"/contact"} />
        </div>
        <div
          className="font-bold text-blue-500 p-2 px-6 cursor-pointer 
        border-2 border-blue-500 hover:bg-gray-100 my-4"
        >
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

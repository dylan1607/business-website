import logo from "../statics/logo.svg";
import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const Navbar = ({ click }) => {
  return (
    <div
      className="flex justify-between items-center p-3 sm:px-8 sticky top-0 z-10 
     bg-white shadow-md no-underline"
    >
      {/* Left */}
      <Link href="/" passHref>
        <div className="flex items-center no-underline cursor-pointer">
          <Image className="text-black" src={logo} alt="" />
          <h2 className=" text-xl">TinCNC</h2>
        </div>
      </Link>

      {/* Right */}
      <div className="flex items-center">
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-10 cursor-pointer">
          {/* <li>
            <NavbarItem title="Năng lực" dropdown />
          </li> */}
          <li>
            <NavbarItem title="Liên hệ" path={"/contact"} />
          </li>
          <li>
            <NavbarItem title="Điều khoản" path={"/legal"} />
          </li>
        </ul>
        <div
          className="font-bold text-blue-500 cursor-pointer 
        border-2 border-blue-500 p-2 hover:bg-blue-100 mx-5"
        >
          <Link href="/login">Đăng nhập</Link>
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
          className="inline-block w-6 h-6 stroke-current md:hidden cursor-pointer"
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

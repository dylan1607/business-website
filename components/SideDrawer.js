import logo from "../statics/logo.svg";
import Link from "next/link";
import Image from "next/image";
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
      <div className="absolute top-20 flex items-center no-underline cursor-pointer">
        <Image className="text-black" src={logo} alt="" />
        <Link href="/" passHref className=" text-xl">
          TinCNC
        </Link>
      </div>

      {/* bottom */}
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center space-y-2 cursor-pointer">
          <li>
            <NavbarItem title="Năng lực" dropdown />
          </li>
          <li>
            <NavbarItem title="Liên hệ" path={"/contact"} />
          </li>
          <li>
            <NavbarItem title="Legal & Policy" path={"/legal"} />
          </li>
        </ul>
        <div
          className="font-bold text-blue-500 p-2 px-6 cursor-pointer 
        border-2 border-blue-500 hover:bg-gray-100 my-4"
        >
          <Link href="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

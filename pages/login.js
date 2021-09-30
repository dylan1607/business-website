import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import BackDrop from "../components/BackDrop";

const Login = () => {
  const [input, setInput] = useState({
    email: null,
    pwd: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const validationForm = () => {
    let returnData = {
      error: false,
      msg: "",
    };
    const vaild = /\S+@\S+\.\S+/;
    if (!vaild.test(input.email)) {
      returnData = {
        error: true,
        msg: "Invaild Email",
      };
    }
    if (input?.pwd?.length < 1) {
      returnData = {
        error: true,
        msg: "Pwd must be greater than 8 characters",
      };
    }
    return returnData;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const validation = validationForm();
    if (validation.error) {
      alert(validation.msg);
    } else {
      // dispatch(loginUser(val));
    }
  };
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <div
        className="flex justify-center items-center py-44 bg-gray-100
    text-black"
      >
        <div className="flex flex-col justify-center items-center max-w-sm w-5/6       p-10 rounded-md border-2 border-gray-100 shadow-md bg-white">
          <h2 className="mb-6 text-2xl">Login</h2>
          <form onSubmit={onSubmit} className="flex flex-col w-full">
            <input
              className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="border p-3 my-6 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="flex flex-col space-y-5">
              <button type="submit" className="btn btn-info hover:bg-blue-400">
                Login
              </button>
              <div
                className="flex flex-col items-center justify-center text-sm 
              text-blue-600 cursor-pointer space-y-3"
              >
                <Link href="/register">Create a new account</Link>
                <Link href="">Forgot your password ?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

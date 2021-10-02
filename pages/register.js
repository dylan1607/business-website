import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    first: null,
    last: null,
    phone: null,
    company: null,
    email: null,
    password: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = () => {};
  return (
    <>
      <div
        className="flex justify-center items-center py-10 bg-gray-100
    text-black"
      >
        <div
          className="flex flex-col justify-center items-center max-w-sm w-5/6
      p-10 rounded-md border-2 border-gray-100 shadow-md bg-white"
        >
          <h2 className="text-2xl">Create an Account</h2>
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full space-y-3 my-5"
          >
            <div className="flex flex-col">
              <span>First Name</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="text"
                name="first"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <span>Last Name</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="text"
                name="last"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <span>Phone Number</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="number"
                name="phone"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <span>Company Name (Optional)</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="number"
                name="company"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <span>Email Adress</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <span>Password</span>
              <input
                className="border p-3 rounded-md text-sm focus:outline-none 
            focus:ring-2 focus:ring-purple-600"
                type="password"
                name="pwd"
                onChange={handleChange}
              />
            </div>
          </form>
          <div>
            By registering, I agree to TinCNC
            <Link href="/legal" passHref>
              <p className="text-blue-600 font-bold cursor-pointer">
                Customer Service Agreement, General Terms and Conditions, and
                Privacy Policy.
              </p>
            </Link>
          </div>
          <div className="flex w-full flex-col space-y-3 mt-5">
            <button type="submit" className="btn btn-info">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
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
        msg: "Email not found",
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
  return (
    <div className="flex justify-center items-center my-52">
      <div
        className="flex flex-col justify-center items-center max-w-md w-4/5
      bg-gray-800 p-6 rounded-xl"
      >
        <h2 className="text-white mb-6 text-2xl">Login</h2>
        <form onSubmit={onSubmit} className="flex flex-col w-full">
          <input
            className="p-3 rounded-xl text-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="p-3 my-6 rounded-xl text-sm"
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="flex justify-evenly">
            <button type="submit" className="btn btn-success">
              Login
            </button>
            <div className="btn btn-ghost text-white text-sm">Register</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

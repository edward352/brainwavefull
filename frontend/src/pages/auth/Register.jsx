import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";
import { UserData } from "../../context/UserContext.jsx";
const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [pass, setPass] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };
  return (
    <section className="auth-page mt-12  mb-12 max-w-screen-xl grid place-items-center mx-auto ">
      <div className="auth-form grid  gap-y-8  shadow-2xl px-12 py-8">
        <div>
          <h1 className="lg:text-center text-5xl font-semibold mb-4 font-mono">
            Sign Up
          </h1>
          <p className="text-gray-600 font-medium ">
            Create an account to unlock exlusive features.
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <label
              className="mb-2 block font-medium text-gray-600"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-4 bg-slate-100 rounded-md"
              placeholder="Enter your Name"
              type="text"
              name="email-id"
              id="email-id"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 bg-slate-100 rounded-md"
              placeholder="Enter your Email"
              type="email"
              name="email-id"
              id="email"
            />
          </div>
          <div className="relative">
            <label
              className="mb-2 block font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-1 px-4 py-4 bg-slate-100 rounded-md"
              placeholder="Enter your Password"
              type={pass ? "text" : "password"}
              name="pass-id"
              id="password"
            />
            <button
              onClick={() => setPass(!pass)}
              className="absolute right-6 bottom-6 text-xl "
            >
              {pass ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>
          <div className="text-gray-700 flex flex-col gap-2">
            <div className="text-gray-700 ">
              <input
                required
                className="accent-slate-200 mr-2 scale-125 cursor-pointer"
                type="checkbox"
                name="rem-id"
                id="rem-id"
              />
              <label htmlFor="ins-id ">Student Account</label>
            </div>
            <div>
              <input
                className="accent-slate-200 mr-2 scale-125 cursor-pointer"
                type="checkbox"
                name="rem-id"
                id="rem-id"
              />
              <label htmlFor="rem-id ">
                I agree with{" "}
                <a className="underline" href="">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a className="underline" href="">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={btnLoading}
              className="bg-orange-400 py-3 text-white rounded-md font-medium"
            >
              {btnLoading ? "Please Wait" : "Sign Up"}
            </button>
            <button className="bg-slate-200 py-2 rounded-md font-medium">
              <img
                className="inline-block w-8 mr-2 "
                src="src\assets\img\googlelogin.svg"
                alt=""
              />
              Sign Up with Google
            </button>
            <div className="text-center ">
              <p className="">
                Already have an account?
                <Link to="/login" className="ml-1 underline font-bold">
                  Login{" "}
                  <TbArrowUpRight className="inline-block mb-1 text-2xl" />
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

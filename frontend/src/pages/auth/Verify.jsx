import React, { useState } from "react";
// import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
 import { UserData } from "../../context/UserContext";
// import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  function onChange(value) {
    console.log("Captcha value:", value);
    setShow(true);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };
  return (
    <div className="auth-page mt-12  mb-12 max-w-screen-xl grid place-items-center mx-auto ">
      <div className="auth-form grid  gap-y-8  shadow-2xl px-12 py-8 ">
        <h2 className="lg:text-center lg:text-5xl text-3xl text-start font-semibold mb-4 font-mono">
          Verify Account
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <label
            className=" text-center mb-2 block font-medium text-gray-600"
            htmlFor="otp"
          >
            OTP
          </label>
          <input
            className="w-full px-4 py-4 bg-slate-200 rounded-md"
            type="number"
            onWheel={(e) => e.target.blur()}
             value={otp}
             onChange={(e) => setOtp(e.target.value)}
            required
          />
          {/* <ReCAPTCHA
            sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          /> */}
          {/* . */}
          {/* {show && ( */}
          <button disabled={btnLoading} className="common-btn w-full  bg-orange-400 py-3 text-white rounded-md font-medium">
           {btnLoading ? "Please Wait..." : "Verify"} Verify
          </button>
        </form>
        <p className="text-center">
          <Link to="/login">
            Go to Login Page{" "}
            <TbArrowUpRight className="inline-block mb-1 text-2xl" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Verify;

import React from "react";
import Featuredata from "./Featuredata.js";
const Feature = () => {
  return (
    <section className="mt-8 grid place-items-center">
      <h1 className="lg:text-4xl text-3xl mb-6 text-center font-mono font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
        Features
      </h1>
      <div className="grid lg:grid-cols-3 gap-2">
        {Featuredata.map((item)=>
        (
            <div key={item.id} className=" p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="">
              <p className="text-5xl font-mono font-bold text-end">{item.id}</p>
              <div>
                <h1 className="text-xl font-semibold font-mono">{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <div className="flex justify-end">
                <svg
                  className="w-12 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="0.5"
                      d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L5.46967 17.4697ZM6.53033 18.5303L18.5303 6.53033L17.4697 5.46967L5.46967 17.4697L6.53033 18.5303Z"
                      fill="#f79f08"
                    ></path>{" "}
                    <path
                      d="M9 6H18V15"
                      stroke="#f79f08"
                      stroke-width="1.6799999999999997"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
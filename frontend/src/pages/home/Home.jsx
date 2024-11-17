import React from 'react'

import { Link, NavLink,useNavigate } from "react-router-dom";
import Feature from '../feature/Feature';
import Faq from '../../components/Faq/Faq.jsx';
// import Bencard from "../common/Bencard/Bencard";
// import Carddata from "../Carddata";
// import Tes from "../Tes/Tes";


const Home = () => {
  const navigate=useNavigate()
  return (
    <>
      <main className="home mt-12 max-w-screen-xl mx-auto lg:px-6 px-4">
        <section className="home-content grid place-items-center lg:p-0 px-4 text-wrap">
          <div>
            <h1 className="lg:text-6xl text-4xl font-semibold">
              <span className="  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Unlock
              </span>{" "}
              Your Creative Potential
            </h1>
          </div>
          <div>
            <h2 className="lg:text-3xl  text-2xl mt-8 ">
              with Online Design and Development Courses.
            </h2>
            <h3 className="lg:text-xl text-center mt-4">
              Learn from Industry Experts and Enhance Your Skills.
            </h3>
          </div>
          <div className="mt-6">
            <button onClick={() => navigate("/courses")} className="common-btn text-white px-6 rounded-lg py-2 bg-orange-700">
            Get Started
          </button>
          </div>
        </section>
        <section>
          <Feature />
        </section>
        <section id="Tes">
          {/* <Tes /> */}
        </section>
        <section id="Faq">
           <Faq/>
        </section>
      </main>
    </>
  )
}

export default Home

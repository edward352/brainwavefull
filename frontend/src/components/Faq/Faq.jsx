import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
const Faq = () => {
  let [openFaq1, setOpenFaq1] = useState(true);
  let [openFaq2, setOpenFaq2] = useState(true);
  let [openFaq3, setOpenFaq3] = useState(true);
  let [openFaq4, setOpenFaq4] = useState(true);
  let [openFaq5, setOpenFaq5] = useState(true);
  return (
    <section className="mb-12 mt-12 shadow-md grid px-4 py-8 lg:justify-between lg:align-top gap-8 lg:gap-0 lg:grid-cols-2 align-top">
      <div className="">
        <h1 className="text-5xl lg:w-full  w-1/2  font-semibold font-mono mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Still you have any questions?Contact our Team via
          <b> support@brainwave.com</b>
        </p>
        <div className="mt-6">
          {/* <button className="bg-slate-300 px-4 py-2 rounded-md">
            See All FAQ's
          </button> */}
        </div>
      </div>
      <div className="border flex flex-col gap-4 border-slate-300 py-4 px-4 w-full">
        <div className="border-b">
          <div className="flex justify-between items-center">
            <p className="font-medium text-md">
              Can I enroll in multiple courses at once?
            </p>
            <div>
              <button
                className="bg-slate-300 p-2  rounded-2xl -"
                onClick={() => setOpenFaq1(!openFaq1)}
              >
                {openFaq1 ? <FiPlus /> : <RxCross1 />}
              </button>
            </div>
          </div>
          <div className="w-3/4 text-wrap mt-2">
            <p className={openFaq1 ? `hidden` : `block`}>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </div>
        </div>
        <div className="border-b">
          <div className="flex justify-between items-center">
            <p className="font-medium text-md">
              What kind of support can I expect from instructors?
            </p>
            <div>
              <button
                className="bg-slate-300 p-2  rounded-2xl -"
                onClick={() => setOpenFaq2(!openFaq2)}
              >
                {openFaq2 ? <FiPlus /> : <RxCross1 />}
              </button>
            </div>
          </div>
          <div className="w-3/4 text-wrap mt-2">
            <p className={openFaq2 ? `hidden` : `block`}>
              They offer expert insights, practical advice, and are dedicated to
              helping you achieve your educational goals.
            </p>
          </div>
        </div>
        <div className="border-b">
          <div className="flex justify-between items-center">
            <p className="font-medium text-md">
              Can I download the course materials for offline access?
            </p>
            <div>
              <button
                className="bg-slate-300 p-2  rounded-2xl -"
                onClick={() => setOpenFaq3(!openFaq3)}
              >
                {openFaq3 ? <FiPlus /> : <RxCross1 />}
              </button>
            </div>
          </div>
          <div className="lg:w-3/4 text-wrap mt-2">
            <p className={openFaq3 ? `hidden` : `block`}>
              {" "}
              Brainwave allows you to download course materials for offline
              access. This feature ensures that you can continue learning even
              without an internet connection.
            </p>
          </div>
        </div>
        <div className="border-b">
          <div className="flex justify-between items-center">
            <p className="font-medium text-md">
              Are there any prerequisites for the courses?
            </p>
            <div>
              <button
                className="bg-slate-300 p-2  rounded-2xl -"
                onClick={() => setOpenFaq4(!openFaq4)}
              >
                {openFaq4 ? <FiPlus /> : <RxCross1 />}
              </button>
            </div>
          </div>
          <div className="w-3/4 text-wrap mt-2">
            <p className={openFaq4 ? `hidden` : `block`}>
              Each course description clearly outlines any prerequisites so you
              can be well-prepared before diving in.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="font-medium text-md">
              Are the courses self-paced or do they have specific start and end
              dates?
            </p>
            <div>
              <button
                className="bg-slate-300 p-2  rounded-2xl -"
                onClick={() => setOpenFaq5(!openFaq5)}
              >
                {openFaq5 ? <FiPlus /> : <RxCross1 />}
              </button>
            </div>
          </div>
          <div className="w-3/4 text-wrap mt-2">
            <p className={openFaq5 ? `hidden` : `block`}>
              Brainwave offers both self-paced and scheduled courses. Self-paced
              ones let you learn anytime, while scheduled ones provide structure
              and regular interactions with instructors and peers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

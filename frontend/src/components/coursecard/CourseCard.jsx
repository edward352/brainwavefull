import React from "react";

import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <section className="">
      <div className="course-card grid  gap-4 px-10 shadow-xl py-4  items-stretch ">
        <div className="grid place-items-center">
          <img
            src={`${server}/${course.image}`}
            alt=""
            className="course-image rounded-md float-left w-[600px] h-[400px] object-cover"
          />
        </div>
        <div className="grid  gap-4   items-stretch ">
          <h3 className="lg:text-4xl text-3xl mb-6 text-center font-mono font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {course.title}
          </h3>
          <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
            <p className="p-2 shadow rounded-md bg-slate-200 text-sm">
              Instructor: {course.createdBy}
            </p>
            <p className="p-2 shadow rounded-md bg-slate-200 text-sm">
              Duration: {course.duration} weeks
            </p>
          </div>
          <p className="p-2 shadow rounded-md bg-slate-300 font-mono font-semibold text-lg">
            Price: ₹{course.price}
          </p>
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="common-btn "
                    >
                      Study
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="common-btn"
                    >
                      Get Started
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn p-2 shadow rounded-md bg-slate-300 font-mono font-semibold text-lg"
                >
                  Study
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="common-btn p-2 shadow rounded-md bg-slate-300  font-mono font-semibold text-lg"
            >
              Get Started
            </button>
          )}

          {user && user.role === "admin" && (
            <button
              onClick={() => deleteHandler(course._id)}
              className="common-btn p-2 shadow rounded-md bg-slate-300 text-sm"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;

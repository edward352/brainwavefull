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
    // <section className="mt-8 mb-12 max-w-screen-xl mx-auto">
    //    <div className="course-card grid place-items-center">
    //     <div className="w-1/3">
    //     <img src={`${server}/${course.image}`} alt="" className="course-image" />
    //     </div>
    //     <div className="text-center mt-4">
    //     <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
    //     <p className="text-gray-600 mt-2">
    //     <span className="font-medium">Instructor:</span> {course.createdBy}
    //   </p>
    //   <p className="text-gray-600 mt-2">
    //     <span className="font-medium">Duration:</span> {course.duration} weeks
    //   </p>
    //   <p className="text-gray-600 mt-2">
    //     <span className="font-medium">Price:</span> ₹{course.price}
    //   </p>
    //   {isAuth ? (
    //     <>
    //       {user && user.role !== "admin" ? (
    //         <>
    //           {user.subscription.includes(course._id) ? (
    //             <button
    //               onClick={() => navigate(`/course/study/${course._id}`)}
    //               className="common-btn"
    //             >
    //               Study
    //             </button>
    //           ) : (
    //             <button
    //               onClick={() => navigate(`/course/${course._id}`)}
    //               className="common-btn"
    //             >
    //               Get Started
    //             </button>
    //           )}
    //         </>
    //       ) : (
    //         <button
    //           onClick={() => navigate(`/course/study/${course._id}`)}
    //           className="common-btn"
    //         >
    //           Study
    //         </button>
    //       )}
    //     </>
    //   ) : (
    //     <button onClick={() => navigate("/login")} className="common-btn">
    //       Get Started
    //     </button>
    //   )}

    //   <br />

    //   {user && user.role === "admin" && (
    //     <button
    //       onClick={() => deleteHandler(course._id)}
    //       className="common-btn"
    //       style={{ background: "red" }}
    //     >
    //       Delete
    //     </button>
    //   )}
    //     </div>
      
    // </div>
    // </section>

    <section className="mt-8 mb-12 max-w-screen-xl mx-auto">
  <div className="course-card grid place-items-center border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
    <div className="w-1/3">
      <img
        src={`${server}/${course.image}`}
        alt={course.title}
        className="course-image rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      />
    </div>
    <div className="text-center mt-4">
      <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Instructor:</span> {course.createdBy}
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Duration:</span> {course.duration} weeks
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Price:</span> ₹{course.price}
      </p>

      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-all"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition-all"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="common-btn bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition-all"
        >
          Get Started
        </button>
      )}

      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(course._id)}
          className="common-btn bg-red-500 text-white py-2 px-4 rounded-lg mt-4 ml-2 hover:bg-red-600 transition-all"
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

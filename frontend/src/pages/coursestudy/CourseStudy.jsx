import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <section className="mt-12 md:text-center mb-12 max-w-screen-xl p-8  mx-auto shadow-xl">
      {course && (
        <div className="course-study-page flex flex-col md:flex-row justify-around">
          <div><img src={`${server}/${course.image}`} alt="" width={350} className="rounded-xl" /></div>
          <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">{course.title}</h2>
          <h4 className="text-2xl ">{course.description}</h4>
          <h5 className="text-2xl">By - {course.createdBy}</h5>
          <h5 className="text-2xl">Duration - {course.duration} weeks</h5>
          <Link to={`/lectures/${course._id}`}>
            <h2 className="p-2 text-2xl font-semibold shadow rounded-md bg-slate-300 ">Lectures</h2>
          </Link>
          </div>
          
        </div>
      )}
    </section>
  );
};

export default CourseStudy;

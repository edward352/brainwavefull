import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
    <div className="courses text-center max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="lg:text-4xl text-3xl mb-6 text-center font-mono font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">Available Courses</h2>

      <div className="course-container grid lg:grid-cols-2 gap-4">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p className="text-gray-600 text-lg">No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;















// import React from "react";
// import { CourseData } from "../../context/CourseContext";
//  import CourseCard from "../../components/coursecard/CourseCard";

// const Courses = () => {
//   const { courses } = CourseData();

//   console.log(courses);
//   return (
//     <div className="courses text-center max-w-screen-xl mx-auto">
//       <h2>Available Courses</h2>

//       <div className="course-container">
//         {courses && courses.length > 0 ? (
//           courses.map((e) => <CourseCard key={e._id} course={e} />)
//         ) : (
//           <p>No Courses Yet!</p>
//         )}
//       </div> 
//     </div>
//   );
// };

// export default Courses;
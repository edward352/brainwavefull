import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();

  console.log(courses);
  return (
    <div className="courses text-center max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Courses</h2>

      <div className="course-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
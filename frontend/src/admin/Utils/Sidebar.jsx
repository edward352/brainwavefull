import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";

const Sidebar = () => {
  const { user } = UserData();
  return (
    <div className="sidebar z-4 bg-gray-100 text-black w-64 min-h-screen p-4">
    <ul>
      <li className="mb-4">
        <Link to={"/admin/dashboard"} className="flex items-center p-2 hover:bg-gray-700 rounded">
          <div className="icon text-xl">
            <AiFillHome />
          </div>
          <span className="ml-2">Home</span>
        </Link>
      </li>
  
      <li className="mb-4">
        <Link to={"/admin/course"} className="flex items-center p-2 hover:bg-gray-700 rounded">
          <div className="icon text-xl">
            <FaBook />
          </div>
          <span className="ml-2">Courses</span>
        </Link>
      </li>
  
      {user && user.mainrole === "superadmin" && (
        <li className="mb-4">
          <Link to={"/admin/users"} className="flex items-center p-2 hover:bg-gray-700 rounded">
            <div className="icon text-xl">
              <FaUserAlt />
            </div>
            <span className="ml-2">Users</span>
          </Link>
        </li>
      )}
  
      <li className="mb-4">
        <Link to={"/account"} className="flex items-center p-2 hover:bg-gray-700 rounded">
          <div className="icon text-xl">
            <AiOutlineLogout />
          </div>
          <span className="ml-2">Logout</span>
        </Link>
      </li>
    </ul>
  </div>  
  );
};

export default Sidebar;

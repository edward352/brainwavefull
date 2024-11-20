import React from "react";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div className=" mt-12  mb-12 max-w-screen-xl grid place-items-center mx-auto ">
      {user && (
        <div className="profile grid  gap-y-8  shadow-2xl px-12 py-8">
          <h2 className="lg:text-center text-5xl font-semibold mb-4 font-mono">
            My Profile
          </h2>
          <div className="profile-info text-gray-600 font-medium">
            <p>
              <strong>Name - {user.name}</strong>
            </p>

            <p>
              <strong>Email - {user.email}</strong>
            </p>

            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn bg-orange-400 py-3 px-3 w-full mb-4 text-white rounded-md font-medium"
            >
              Dashboard
            </button>

    

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn bg-orange-400 py-3 px-4 w-full text-white rounded-md font-medium"
              >
                Admin Dashboard
              </button>
            )}

            <br />

            <button
              onClick={logoutHandler}
              className="common-btn mt-6 bg-orange-400 py-3 px-4 w-full text-white rounded-md font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;

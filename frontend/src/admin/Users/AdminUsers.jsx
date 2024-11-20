import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "superadmin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("are you sure you want to update this user role")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  console.log(users);
  return (
    <Layout>
      <div className="users  p-4">
  <h1 className="text-2xl font-bold mb-4">All Users</h1>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-auto p-2">#</th>
          <th className="w-auto p-2">Name</th>
          <th className="w-auto p-2">Email</th>
          <th className="w-auto p-2">Role</th>
          <th className="w-auto p-2">Update Role</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => (
            <tr key={user._id} className="bg-gray-100 border-b border-gray-200">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 text-center">{user.name}</td>
              <td className="p-2 text-center">{user.email}</td>
              <td className="p-2 text-center">{user.role}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => updateRole(user._id)}
                  className="common-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update Role
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>

    </Layout>
  );
};

export default AdminUsers;

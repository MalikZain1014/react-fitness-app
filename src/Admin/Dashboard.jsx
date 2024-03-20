/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ExerciseDetail from "./ExerciseDetail";
import UserDatail from "./UserDatail";
import { Link, useNavigate } from "react-router-dom";

const Admin = ({ logIn, setLogIn }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("users");
  const Admintoken = localStorage.getItem("Admintoken");
  const handleLogout = async () => {
    try {
      localStorage.removeItem("Admintoken");

      navigate("/admin");
      setLogIn(false);
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };
  useEffect(() => {
    if (!logIn || !Admintoken) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-800">
      {/* Left Sidebar */}
      <div className="bg-gray-800 text-white w-full lg:w-64 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 mt-6">
            <li>
              <Link
                className={`block py-2 px-4 hover:bg-gray-700 ${
                  selectedTab === "users" ? "bg-gray-700" : ""
                }`}
                onClick={() => setSelectedTab("users")}
              >
                Users
              </Link>
            </li>
            <li>
              <a
                className={`block py-2 px-4 hover:bg-gray-700 ${
                  selectedTab === "exercises" ? "bg-gray-700" : ""
                }`}
                onClick={() => setSelectedTab("exercises")}
              >
                Exercises
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 hover:bg-gray-700"
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </nav>
      </div>
      <div className="flex-grow px-0">
        {selectedTab === "users" ? (
          <UserDatail className="dark:text-white" />
        ) : (
          <ExerciseDetail className="dark:text-white" />
        )}
      </div>
    </div>
  );
};

export default Admin;

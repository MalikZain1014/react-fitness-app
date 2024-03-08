/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfileDropdown = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5500/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex items-center">
      <span className="mr-3">
        {userData && (
          <span>
            Welcome, {userData.name} ({userData.email})
          </span>
        )}
      </span>
      <div className="relative">
        <button className="text-gray-700 focus:outline-none">Profile</button>
        <div className="absolute bg-white mt-2 w-48 rounded-md shadow-lg py-1 hidden">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Profile
          </Link>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown"; // Assume you have a ProfileDropdown component

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location = "/login";
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-40">
      <div className="md:flex py-3 items-center justify-between bg-violet-100 dark:bg-gradient-to-r from-neutral-800 via-slate-800 to-neutral-800">
        {isLoggedIn ? (
          <ProfileDropdown isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        ) : (
          <div className="hidden lg:flex lg:flex-2 lg:items-left lg:justify-end lg:space-x-6">
            <Link
              to="/login"
              className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-primary"
            >
              Login
            </Link>
            <span
              className="h-6 w-px lg:bg-slate-800 lg:dark:bg-slate-300"
              aria-hidden="true"
            />
            <Link
              to="/registernow"
              className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-primary"
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

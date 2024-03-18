/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.png";
import userlogo from "../assets/images/logoWhite.png";

import { BiSun, BiMoon, BiLaptop } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = ({ theme, setTheme, loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      // Make a request to logout endpoint
      await axios.post("http://localhost:5500/logout");

      // Clear any local storage or session data if needed
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirect to login page or any other desired page
      navigate("/login");
      setLoggedIn(false); // Update the loggedIn state
    } catch (error) {
      console.error("Failed to logout", error);
      // Handle error if needed
    }
  };

  // Conditionally render login/logout buttons
  const renderAuthButtons = () => {
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      return (
        <>
          <div className=" lg:relative  ">
            <button
              className="text-slate-800 dark:text-slate-300 mt-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={userlogo}
                className="rounded-full shadow-lg w-10 h-10"
              />
            </button>
            {isOpen && (
              <div className="lg:absolute right-0 mt-2 w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700  divide-gray-100 dark:divide-gray-700 rounded-lg shadow-lg">
                <div className="p-4">
                  <div className=" ">
                    <img
                      src={logo} // Replace with actual path to profile logo
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {user.firstname + " " + user.lastname}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    More Details
                  </Link>
                </div>
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <motion.div
            whileHover={{
              scale: 1.2,
              originX: 0,
            }}
            transition={{
              type: "spring",
              stiffness: "300",
            }}
          >
            <Link
              to="/login"
              className="text-slate-800 dark:text-slate-300 cursor-pointer border-primary"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </motion.div>
          <span
            className="h-6 w-px lg:bg-slate-800 lg:dark:bg-slate-300"
            aria-hidden="true"
          />
          <motion.div
            whileHover={{
              scale: 1.2,
              originX: 0,
            }}
            transition={{
              type: "spring",
              stiffness: "300",
            }}
          >
            <Link
              to="/registernow"
              className="text-slate-800 dark:text-slate-300 cursor-pointer border-primary"
            >
              Register Now
            </Link>
          </motion.div>
        </>
      );
    }
  };

  const themeOptions = [
    { icon: BiSun, title: "light" },
    { icon: BiMoon, title: "dark" },
    { icon: BiLaptop, title: "system" },
  ];

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const onWhindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  onWhindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");

        break;

      case "light":
        element.classList.remove("dark");

        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWhindowMatch();
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <nav className="sticky top-0 left-0 w-full z-40">
      <motion.div
        className="
            fixed top-0 left-0 right-0 h-1 dark:bg-secondary bg-primary origin-left "
      ></motion.div>
      <div
        className={`lg:hidden fixed top-0 right-0 pr-3 w-3/6 h-full bg-white dark:bg-gradient-to-r from-neutral-800 via-slate-800 to-neutral-800 z-50 transition-transform ease-in-out duration-300 transform ${
          open ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex ml-3 flex-col h-full justify-left items-left">
          <Link
            to="/"
            className="text-slate-800 dark:text-slate-300 my-4"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/exercises"
            className="text-slate-800 dark:text-slate-300 my-4"
            onClick={handleLinkClick}
          >
            Exercises
          </Link>
          <Link
            to="/calculator"
            className="text-slate-800 dark:text-slate-300 my-4"
            onClick={handleLinkClick}
          >
            Calculator
          </Link>
          {/* ... (other links with onClick handlers) */}
          <Link
            to="fordiabbetes"
            className="text-slate-800 dark:text-slate-300 my-4"
            onClick={handleLinkClick}
          >
            ForDiabbetes
          </Link>
          <Link
            to="/aboutus"
            className="text-slate-800 dark:text-slate-300 my-4"
            onClick={handleLinkClick}
          >
            About Us
          </Link>

          <div className=" my-4 gap-x-4">{renderAuthButtons()}</div>
          <div className="flex my-4 gap-x-4">
            {themeOptions.map((opt) => (
              // eslint-disable-next-line react/jsx-key
              <motion.div
                key={opt.title}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: "300",
                }}
              >
                <opt.icon
                  key={opt.title}
                  onClick={() => setTheme(opt.title)}
                  className={`text-2xl cursor-pointer ${
                    theme === opt.title ? "text-yellow-400" : "text-slate-600 "
                  }`}
                  title={opt.title}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:flex py-2 items-center justify-between bg-violet-100 dark:bg-gradient-to-r from-neutral-800 via-slate-800 to-neutral-800">
        <div
          onClick={() => setOpen(!open)}
          className="text-slate-800 dark:text-slate-300 text-4xl absolute top-5 right-6 cursor-pointer z-50 lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div className="flex">
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
            }}
            transition={{
              type: "spring",
              stiffness: "300",
            }}
            className="w-10 h-10 mt-3 mx-4"
          >
            <Link to="/">
              <img className="object-cover" src={logo} alt="" />
            </Link>
          </motion.div>

          <div
            className="hidden  lg:flex lg:flex-row gap-y-6 lg:gap-y-0 lg:flex-row lg:items-center
lg:pb-0 pb-12 lg:bg-violet-100 lg:dark:bg-transparent lg:w-auto lg:pl-0 pl-9 lg:gap-x-10
text-xl md:text-[22px] lg:opacity-100 opacity-0"
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                onClick={() => setOpen(false)}
                to="/"
                className="text-slate-800 lg:dark:text-slate-300 cursor-pointer"
              >
                Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                to="/exercises"
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                Exercises
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                to="/calculator"
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                Calculator
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                onClick={() => setOpen(false)}
                to="fordiabbetes"
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                ForDiabbetes
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                to="/aboutus"
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:flex gap-x-4 bg-[#fae8ff] dark:bg-gray-300 rounded-md  p-2">
          {themeOptions.map((opt) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              key={opt.title}
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <opt.icon
                key={opt.title}
                onClick={() => setTheme(opt.title)}
                className={`text-2xl cursor-pointer ${
                  theme === opt.title ? "text-primary" : "text-slate-600 "
                }`}
                title={opt.title}
              />
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-2 lg:items-left lg:justify-end lg:space-x-6 mr-5">
          {renderAuthButtons()}

          {/* <>
            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                to="/login"
                className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-primary"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </motion.div>
            <span
              className="h-6 w-px lg:bg-slate-800 lg:dark:bg-slate-300"
              aria-hidden="true"
            />
            <motion.div
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
            >
              <Link
                to="/registernow"
                className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-primary"
              >
                Register Now
              </Link>
            </motion.div>
          </> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

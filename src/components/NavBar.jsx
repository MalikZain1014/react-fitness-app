import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import logo from "../assets/images/Logo.svg";
import darkLogo from "../assets/images/logo.svg";
import { BiSun, BiMoon, BiLaptop } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// eslint-disable-next-line react/prop-types
const NavBar = ({ theme, setTheme }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [open, setOpen] = useState(false);
  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    setOpen(false);
  };
  const themeOptions = [
    { icon: BiSun, title: "light" },
    { icon: BiMoon, title: "dark" },
    { icon: BiLaptop, title: "system" },
  ];

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const [armLogo, setArmLogo] = useState(
    localStorage.getItem("theme") === "dark" ? darkLogo : logo
  );

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
        setArmLogo(darkLogo);
        break;

      case "light":
        element.classList.remove("dark");
        setArmLogo(logo);
        localStorage.setItem("theme", "light");
        break;

      default:
        setArmLogo("");

        if (darkQuery.matches) {
          setArmLogo(darkLogo);
        } else {
          setArmLogo(logo);
        }

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

    if (darkQuery.matches) {
      setArmLogo(darkLogo);
    } else {
      setArmLogo(logo);
    }
  });
  return (
    <nav className="sticky top-0 left-0 w-full z-40">
      <motion.div
        style={{ scaleX }}
        className="
            fixed top-0 left-0 right-0 h-1 dark:bg-secondary bg-primary origin-left "
      ></motion.div>
      <div
        className={`lg:hidden fixed top-0 right-0 w-half h-full bg-white dark:bg-slate-800 z-50 transition-transform ease-in-out duration-300 transform ${
          open ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex ml-3 flex-col h-full justify-left items-left">
          <Link
            to="/"
            className="text-slate-800 dark:text-slate-300 py-4"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/exercises"
            className="text-slate-800 dark:text-slate-300 py-4"
            onClick={handleLinkClick}
          >
            Exercises
          </Link>
          <Scroll
            to="classes"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-slate-800 dark:text-slate-300 py-4"
            onClick={handleLinkClick}
          >
            Classes
          </Scroll>
          {/* ... (other links with onClick handlers) */}
          <Scroll
            to="reasons"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-slate-800 dark:text-slate-300 py-4"
            onClick={handleLinkClick}
          >
            Reasons
          </Scroll>
          <Link
            to="/contectus"
            className="text-slate-800 dark:text-slate-300 py-4"
            onClick={handleLinkClick}
          >
            Contacts
          </Link>
          <div className="flex">
            <Link
              to="/signin"
              className="text-slate-800 dark:text-slate-300 py-4"
              onClick={handleLinkClick}
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              className="text-slate-800 dark:text-slate-300 py-4 px-2"
              onClick={handleLinkClick}
            >
              Create account
            </Link>
          </div>
          <div className="flex py-4 gap-x-4">
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

      <div className="md:flex py-3 items-center justify-between bg-[#fdf4ff] dark:bg-slate-800">
        <div
          onClick={() => setOpen(!open)}
          className="text-slate-800 dark:text-slate-300 text-4xl absolute right-5 cursor-pointer z-50 lg:hidden"
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
            className="w-12 h-12 mx-5"
          >
            <Link to="/">
              <img className="object-cover" src={armLogo} alt="" />
            </Link>
          </motion.div>

          <div
            className={`flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:items-center 
                    lg:pb-0 pb-12 absolute lg:static bg-[#fdf4ff]  lg:bg-transparent lg:z-auto z-[-1]
                    left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in lg:gap-x-10
                    text-xl md:text-[22px] lg:opacity-100 opacity-0`}
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
                className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-b-4 border-primary"
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
                {/* <Scroll
                  onClick={() => setOpen(false)}
                  to="exercises"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
                > */}
                Exercises
                {/* </Scroll> */}
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
              <Scroll
                onClick={() => setOpen(false)}
                to="classes"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                Classes
              </Scroll>
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
              <Scroll
                onClick={() => setOpen(false)}
                to="reasons"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                Reasons
              </Scroll>
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
                to="/contectus"
                className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
              >
                {/* <Scroll
                  onClick={() => setOpen(false)}
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                > */}
                Contacts
                {/* </Scroll> */}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-2 lg:items-left lg:justify-end lg:space-x-6">
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
              to="/signin"
              className="text-slate-800 lg:dark:text-slate-300 cursor-pointer  border-primary"
            >
              Sign in
            </Link>
          </motion.div>
          <span
            className="h-6 w-px  lg:bg-slate-800 lg:dark:bg-slate-300"
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
              to="/signup"
              className="text-slate-800 lg:dark:text-slate-300 cursor-pointer  border-primary"
            >
              Create account
            </Link>
          </motion.div>
        </div>

        <div className="hidden lg:flex gap-x-4 bg-[#fae8ff] dark:bg-gray-300 rounded-md p-2 mr-5">
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
    </nav>
  );
};

export default NavBar;

// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { Link as Scroll } from "react-scroll";
// import logo from "../assets/images/Logo.png";
// import darkLogo from "../assets/images/logo.png";
// import { BiSun, BiMoon, BiLaptop } from "react-icons/bi";
// import { useEffect, useState } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";

// const NavBar = ({ theme, setTheme }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user authentication
//   const [user, setUser] = useState(null); // State to manage user information

//   useEffect(() => {
//     // Check if user is logged in (you may implement this logic based on your authentication mechanism)
//     const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(userLoggedIn);

//     // If user is logged in, fetch user data and update state
//     if (userLoggedIn) {
//       // Fetch user data from backend based on user's authentication token or any other identifier
//       const userData = localStorage.getItem("userData");
//       setUser(userData);
//     }
//   }, []);
//   const handleLogin = () => {
//     // Simulate user authentication logic (you can replace this with your actual authentication mechanism)
//     localStorage.setItem("isLoggedIn", "true");
//     const userData = { name: "John Doe", email: "john.doe@example.com" };
//     localStorage.setItem("userData", JSON.stringify(userData));

//     setIsLoggedIn(true);
//     setUser(userData);
//   };
//   const handleLogout = () => {
//     // Perform logout logic here
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userData");
//     setIsLoggedIn(false);
//     setUser(null);
//   };
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const [open, setOpen] = useState(false);
//   const handleLinkClick = () => {
//     // Close the sidebar when a link is clicked
//     setOpen(false);
//   };
//   const themeOptions = [
//     { icon: BiSun, title: "light" },
//     { icon: BiMoon, title: "dark" },
//     { icon: BiLaptop, title: "system" },
//   ];

//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

//   const [armLogo, setArmLogo] = useState(
//     localStorage.getItem("theme") === "dark" ? darkLogo : logo
//   );

//   const onWhindowMatch = () => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && darkQuery.matches)
//     ) {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }
//   };
//   onWhindowMatch();

//   useEffect(() => {
//     switch (theme) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         setArmLogo(darkLogo);
//         break;

//       case "light":
//         element.classList.remove("dark");
//         setArmLogo(logo);
//         localStorage.setItem("theme", "light");
//         break;

//       default:
//         setArmLogo("");

//         if (darkQuery.matches) {
//           setArmLogo(darkLogo);
//         } else {
//           setArmLogo(logo);
//         }

//         localStorage.removeItem("theme");
//         onWhindowMatch();
//         break;
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theme]);

//   darkQuery.addEventListener("change", (e) => {
//     if (!("theme" in localStorage)) {
//       if (e.matches) {
//         element.classList.add("dark");
//       } else {
//         element.classList.remove("dark");
//       }
//     }

//     if (darkQuery.matches) {
//       setArmLogo(darkLogo);
//     } else {
//       setArmLogo(logo);
//     }
//   });
//   return (
//     <nav className="sticky top-0 left-0 w-full z-40">
//       <motion.div
//         style={{ scaleX }}
//         className="
//             fixed top-0 left-0 right-0 h-1 dark:bg-secondary bg-primary origin-left "
//       ></motion.div>
//       <div
//         className={`lg:hidden fixed top-0 right-0 w-half h-full bg-white dark:bg-gradient-to-r from-neutral-800 via-slate-800 to-neutral-800 z-50 transition-transform ease-in-out duration-300 transform ${
//           open ? "-translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Sidebar Content */}
//         <div className="flex ml-3 flex-col h-full justify-left items-left">
//           <Link
//             to="/"
//             className="text-slate-800 dark:text-slate-300 py-4"
//             onClick={handleLinkClick}
//           >
//             Home
//           </Link>
//           <Link
//             to="/exercises"
//             className="text-slate-800 dark:text-slate-300 py-4"
//             onClick={handleLinkClick}
//           >
//             Exercises
//           </Link>
//           <Link
//             to="/exercise"
//             className="text-slate-800 dark:text-slate-300 py-4"
//           >
//             Demo
//           </Link>
//           {/* ... (other links with onClick handlers) */}
//           <Scroll
//             to="reasons"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="text-slate-800 dark:text-slate-300 py-4"
//             onClick={handleLinkClick}
//           >
//             Reasons
//           </Scroll>
//           <Link
//             to="/contectus"
//             className="text-slate-800 dark:text-slate-300 py-4"
//             onClick={handleLinkClick}
//           >
//             Contacts
//           </Link>
//           {isLoggedIn ? (
//             <div className="flex items-center">
//               <span className="mr-3">{/* User icon component */}</span>
//               <div className="relative">
//                 <button
//                   className="text-gray-700 focus:outline-none"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//                 {/* Logout dropdown content */}
//                 <div className="absolute bg-white mt-2 w-48 rounded-md shadow-lg py-1 hidden">
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Profile
//                   </Link>
//                   <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none">
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex">
//               <Link
//                 to="/login"
//                 className="text-slate-800 dark:text-slate-300 py-4"
//                 onClick={handleLinkClick}
//               >
//                 Login
//               </Link>

//               <Link
//                 to="/registernow"
//                 className="text-slate-800 dark:text-slate-300 py-4 px-2"
//                 onClick={handleLinkClick}
//               >
//                 Register Now
//               </Link>
//             </div>
//           )}
//           <div className="flex py-4 gap-x-4">
//             {themeOptions.map((opt) => (
//               // eslint-disable-next-line react/jsx-key
//               <motion.div
//                 key={opt.title}
//                 whileHover={{
//                   scale: 1.3,
//                   originX: 0,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: "300",
//                 }}
//               >
//                 <opt.icon
//                   key={opt.title}
//                   onClick={() => setTheme(opt.title)}
//                   className={`text-2xl cursor-pointer ${
//                     theme === opt.title ? "text-yellow-400" : "text-slate-600 "
//                   }`}
//                   title={opt.title}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="md:flex py-3 items-center justify-between bg-violet-100 dark:bg-gradient-to-r from-neutral-800 via-slate-800 to-neutral-800">
//         <div
//           onClick={() => setOpen(!open)}
//           className="text-slate-800 dark:text-slate-300 text-4xl absolute top-5 right-5 cursor-pointer z-50 lg:hidden"
//         >
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </div>

//         <div className="flex">
//           <motion.div
//             whileHover={{
//               scale: 1.1,
//               originX: 0,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: "300",
//             }}
//             className="w-12 h-12 mx-5 mb-2"
//           >
//             <Link to="/">
//               <img className="object-cover" src={armLogo} alt="" />
//             </Link>
//           </motion.div>
//           {/* <div
//               className={`flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:items-center
//                       lg:pb-0 pb-12 absolute lg:static bg-violet-100  lg:bg-transparent lg:z-auto z-[-1]
//                       left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in lg:gap-x-10
//                       text-xl md:text-[22px] lg:opacity-100 opacity-0`}
//             > */}
//           {/* Conditional rendering based on screen size */}
//           <div
//             className="hidden  lg:flex lg:flex-row gap-y-6 lg:gap-y-0 lg:flex-row lg:items-center
//            lg:pb-0 pb-12 lg:bg-violet-100 lg:dark:bg-transparent lg:w-auto lg:pl-0 pl-9 lg:gap-x-10
//             text-xl md:text-[22px] lg:opacity-100 opacity-0"
//           >
//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 onClick={() => setOpen(false)}
//                 to="/"
//                 className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-b-4 border-primary"
//               >
//                 Home
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 to="/exercises"
//                 className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
//               >
//                 Exercises
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 to="/exercise"
//                 className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
//               >
//                 Demo
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Scroll
//                 onClick={() => setOpen(false)}
//                 to="reasons"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={500}
//                 className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
//               >
//                 Reasons
//               </Scroll>
//             </motion.div>

//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 to="/contectus"
//                 className="text-slate-800 cursor-pointer lg:dark:text-slate-300"
//               >
//                 Contacts
//               </Link>
//             </motion.div>
//           </div>
//         </div>

//         {!isLoggedIn ? (
//           <div className="hidden lg:flex lg:flex-2 lg:items-left lg:justify-end lg:space-x-6">
//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 to="/login"
//                 className="text-slate-800 lg:dark:text-slate-300 cursor-pointer  border-primary"
//               >
//                 Login
//               </Link>
//             </motion.div>
//             <span
//               className="h-6 w-px  lg:bg-slate-800 lg:dark:bg-slate-300"
//               aria-hidden="true"
//             />
//             <motion.div
//               whileHover={{
//                 scale: 1.2,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <Link
//                 to="/registernow"
//                 className="text-slate-800 lg:dark:text-slate-300 cursor-pointer  border-primary"
//               >
//                 Register Now
//               </Link>
//             </motion.div>
//           </div>
//         ) : (
//           <div className="flex items-center">
//             <span className="mr-3">
//               {/* Display user information (e.g., name) */}
//             </span>
//             <div className="relative">
//               <button
//                 className="text-gray-700 focus:outline-none"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//               {/* Logout dropdown content */}
//               <div className="absolute bg-white mt-2 w-48 rounded-md shadow-lg py-1 hidden">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//                 <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="hidden lg:flex gap-x-4 bg-[#fae8ff] dark:bg-gray-300 rounded-md p-2 mr-5">
//           {themeOptions.map((opt) => (
//             // eslint-disable-next-line react/jsx-key
//             <motion.div
//               key={opt.title}
//               whileHover={{
//                 scale: 1.3,
//                 originX: 0,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: "300",
//               }}
//             >
//               <opt.icon
//                 key={opt.title}
//                 onClick={() => setTheme(opt.title)}
//                 className={`text-2xl cursor-pointer ${
//                   theme === opt.title ? "text-primary" : "text-slate-600 "
//                 }`}
//                 title={opt.title}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

export default function Exercise() {
  return <div></div>;
}

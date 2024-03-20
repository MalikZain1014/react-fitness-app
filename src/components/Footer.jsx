import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <span className="lg:border-t-2 border-gray-400 w-full h-2 flex items-center justify-center lg:justify-end "></span>
      <footer className="text-gray-600 body-font ">
        <div className="px-6 lg:mx-6 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/">
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
              <img src={Logo} alt="Fitness Craze" className="w-16, h-16" />
              <span className="ml-4 text-xl">FitTreck</span>
            </span>
          </Link>
          <p className="text-sm text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-white">
            © 2024 FitTreck —
            {/* <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-gray-100"> */}
            <Link to="/registernow">
              <button
                className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  transition  ease-in-out bg-gray-200 dark:bg-transparent  hover:bg-red-900  hover:bg-opacity-10  focus:border-neutral-600  focus:outline-none focus:ring-0 active:border-neutral-800  dark:hover:bg-opacity-10"
                data-te-ripple-init="dark"
                data-te-ripple-color="light"
              >
                Register Now!
              </button>
            </Link>
            {/* </span> */}
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-500 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-800"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="text-blue-800 text-3xl   m-2  hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-150" />
            </a>
            <a
              className="ml-4 text-gray-500 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-800"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="text-blue-400  text-3xl  m-2  hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-150" />
            </a>
            <a
              className="ml-4 text-gray-500 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-800"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="text-red-700 text-3xl  m-2  hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-150" />
            </a>
            <a
              className="ml-4 text-gray-500 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-900"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="text-slate-800 dark:text-slate-300 text-3xl  m-2  hover:text-orange-600 transition-all duration-300 cursor-pointer hover:scale-150" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

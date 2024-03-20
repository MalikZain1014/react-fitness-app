/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";

const AdminLogin = ({ setLogIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5500/loginadmin", formData);
      // Assuming the API returns a token upon successful login
      const Admintoken =
        "hebkwebckweufiqgfbb34648274hdu3qriqwgvsuq09347y9rtg4uifbr";
      localStorage.setItem("Admintoken", Admintoken); // Store token in local storage
      setLogIn(true); // Set logged in state
      navigate("/dashboard"); // Redirect to the dashboard or any other route
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="bg-transparent flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/" className="justify-center flex">
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src={logo} alt="logo" />
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-800 dark:text-slate-300">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-300"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    autoComplete=""
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mt-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-300"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    autoComplete=""
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 dark:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {error && <div className="text-red-500">{error}</div>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminLogin.propTypes = {
  setLogIn: PropTypes.func.isRequired,
};

export default AdminLogin;

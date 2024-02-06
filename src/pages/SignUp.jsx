import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/signin");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="flex items-center p-5 justify-center gap-y-4 flex-col mt-20">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__wobble">
          <Link to="/" className="justify-center  flex">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={Logo} alt="logo" />
          </Link>
          <h1 className=" mt-6 text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-300">
            <span className="text-secondary">Create an User account</span>
          </h1>
        </AnimationOnScroll>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 mt-3 w-10/12 md:w-3/5 xl:w-2/5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
                className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-800 dark:text-slate-300"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="number"
                placeholder="Age"
                autoComplete="age"
                required=""
                className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Weight
            </label>
            <div className="mt-2">
              <input
                id="weight"
                name="weight"
                type="number"
                placeholder="weight"
                autoComplete="weight"
                required=""
                className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Height
            </label>
            <div className="mt-2">
              <input
                id="height"
                name="height"
                type="number"
                placeholder="Height"
                autoComplete="height"
                required=""
                className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="target-weight"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Target-Weight
            </label>
            <div className="mt-2">
              <input
                id="target-weight"
                name="target-weight"
                type="number"
                placeholder="Target-Weight"
                autoComplete="target-weight"
                required=""
                className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="pl-2  w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-800 dark:text-slate-300"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="pl-2 bg-transparent decoration-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {error && <div className={"styles.error_msg"}>{error}</div>}
          {/* <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="pl-2 bg-transparent decoration-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required=""
            />
          </div> */}
          {/* <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
            >
              Sing in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

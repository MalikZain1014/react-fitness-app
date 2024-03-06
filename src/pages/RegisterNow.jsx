import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function RegisterNow() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
    height: "",
    weight: "",
    targetweight: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5500/register";
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
          <Link to="/" className="justify-center flex">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={Logo} alt="logo" />
          </Link>
          <h1 className=" mt-6 text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-300">
            <span className="text-secondary">Create an User account</span>
          </h1>
        </AnimationOnScroll>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 mt-3 w-10/12 md:w-3/5 xl:w-2/5"
        >
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            First Name
          </label>
          <input
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
            type="text"
            placeholder="First Name"
            autoComplete="firstname"
            required
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Last Name
          </label>
          <input
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
            type="text"
            placeholder="Last Name"
            autoComplete="lastname"
            required
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            value={data.email}
            required
            className="pl-2  w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

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

          <label
            htmlFor="age"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            autoComplete="age"
            onChange={handleChange}
            value={data.age}
            required=""
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="height"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Height
          </label>
          <input
            id="height"
            name="height"
            type="number"
            placeholder="Height in Feet"
            autoComplete="height"
            onChange={handleChange}
            value={data.height}
            required=""
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="weight"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Weight
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            placeholder="Weight in kg"
            autoComplete="weight"
            onChange={handleChange}
            value={data.weight}
            required=""
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="targetWeight"
            className="block text-sm font-medium text-slate-800 dark:text-slate-300"
          >
            Target Weight
          </label>
          <input
            id="targetweight"
            name="targetweight"
            type="number"
            placeholder="Target Weight"
            autoComplete="targetweight"
            onChange={handleChange}
            value={data.targetweight}
            required=""
            className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          {error && <div className={"styles.error_msg"}>{error}</div>}

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create an account
          </button>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

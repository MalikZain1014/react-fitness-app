import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function TrainerSignUp() {
  const [trainerData, setTrainerData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    experience: "",
  });
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(""); // New state for email uniqueness error
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setTrainerData({ ...trainerData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5500/trainer";
      const { data: res } = await axios.post(url, trainerData);
      console.log("🚀 ~ handleSubmit ~ trainerData:", trainerData);
      console.log(res.message);

      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        if (
          error.response.data &&
          error.response.data.message &&
          error.response.data.message.includes("email")
        ) {
          setEmailError("Email already exists"); // Set email uniqueness error
          setError(""); // Clear general error
        } else {
          setEmailError(""); // Clear email uniqueness error
          setError(error.response.data.message || "Email already exists"); // Set general error
        }
      }
    }
  };

  return (
    <div className="flex items-center p-5 justify-center gap-y-4 flex-col mt-10">
      <AnimationOnScroll initiallyVisible={true} animateIn="animate__wobble">
        <Link to="/" className="justify-center flex">
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src={Logo} alt="logo" />
        </Link>
        <h1 className=" mt-6 text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-300">
          <span className="text-secondary">Create a Trainer account</span>
        </h1>
      </AnimationOnScroll>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-2 mt-3 w-10/12 md:w-3/5 xl:w-2/5"
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-800 mt-1 dark:text-slate-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          required
          value={trainerData.name}
          onChange={handleChange}
          className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-800 mt-1 dark:text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          value={trainerData.email}
          onChange={handleChange}
          className="px-4  w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}{" "}
        {/* Display email uniqueness error message */}
        {/* Display email uniqueness error message */}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-800 mt-1 dark:text-slate-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          minLength="8" // Example password length restriction
          maxLength="20"
          required
          value={trainerData.password}
          onChange={handleChange}
          className="pl-2 bg-transparent decoration-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label
          htmlFor="age"
          className="block text-sm font-medium text-slate-800 mt-1 dark:text-slate-300"
        >
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          required
          value={trainerData.age}
          onChange={handleChange}
          className="pl-2 bg-transparent decoration-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-slate-800 mt-1 dark:text-slate-300"
        >
          Experience
        </label>
        <input
          type="text"
          name="experience"
          id="experience"
          placeholder="Experience"
          required
          value={trainerData.experience}
          onChange={handleChange}
          className="pl-2 bg-transparent decoration-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {error && <div className={"styles.error_msg"}>{error}</div>}
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

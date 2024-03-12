import { AnimationOnScroll } from "react-animation-on-scroll";

const ContectUs = () => {
  return (
    <div
      id="contact-us"
      className="flex items-center p-5 justify-center gap-y-4 flex-col my-8"
    >
      <AnimationOnScroll initiallyVisible={true} animateIn="animate__wobble">
        <h1 className="capitalize mb-6 text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-300">
          <span className="text-secondary">Join now</span> to get in shape
        </h1>
      </AnimationOnScroll>
      <p className="text-justify md:w-2/3 xl:w-1/2 text-slate-800 dark:text-slate-300">
        Transform your body and mind with our expert guidance and
        state-of-the-art facilities. Take the first step towards a healthier,
        happier you today
      </p>
      <form
        action="#"
        className="flex flex-col gap-y-4 mt-3 w-11/12 md:w-4/5 xl:w-1/2"
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="none"
          required
          className="pl-2 w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required=""
          className="px-4  w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <textarea
          className="px-4 capitalize  w-full dark:bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="message"
          name="text"
          type="text"
          id="textarea"
          cols="30"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContectUs;

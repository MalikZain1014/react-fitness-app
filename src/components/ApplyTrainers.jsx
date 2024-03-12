import img from "../assets/images/protrainer.png";
import { useNavigate } from "react-router-dom";

export default function ApplyTrainers() {
  const navigate = useNavigate();
  return (
    <>
      <section className="overflow-hidden items-center lg:items-start p-5 mb-24 grid gap-y-11  grid-cols-6  lg:gap-y-0 md:pt-16 lg:pt-4">
        <div className=" lg:order-first grid justify-center lg:justify-normal col-span-6 lg:col-span-3 xl:col-span-2 ">
          <div className="grid justify-start items-start lg:pl-7">
            <img src={img} alt="" className="w-full md:w-auto" />
          </div>
        </div>

        {/* Description */}
        <div className=" order-last text-center grid justify-self-center lg:justify-self-end lg:text-start lg:gap-x-10 col-span-6 lg:col-span-3 xl:col-span-3 prose prose-slate lg:mt-4">
          <h1 className="capitalize grid justify-self-center lg:justify-self-start text-center sm:text-start font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-300"></h1>
          <h2 className=" p-2 uppercase bg-orange-200 text-orange-600 text-2xl font-semibold tracking-widest rounded-2xl">
            Professional Trainers
          </h2>
          <div className="p-2 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-slate-800 dark:text-slate-300 font-semibold p-2  my-2">
              We are Hiring Professional Trainers
            </h2>

            <blockquote>
              <p className="text-start my-5 capitalize text-secondary">
                Why should we attend these classes? What classes are more{" "}
                <code>useful</code> for us? Will we get the desired result soon
                by participating in these classes?
              </p>
            </blockquote>

            <button
              onClick={() => navigate("/trainersignup")}
              className="border-2 my-2 mx-10 border-orange-400 p-2 rounded text-xl font-semibold bg-orange-600  text-zinc-200  transition-all duration-300 hover:bg-orange-800 hover:text-white"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

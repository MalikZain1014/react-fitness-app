import { Link } from "react-router-dom";
import HeroBannerImg from "../assets/images/banner.png";
import { motion } from "framer-motion";
import Register from "../assets/images/Register.png";

const HeroBanner = () => {
  return (
    <section className="grid grid-cols-4 w-full justify-between lg:pb-5 pt-5 lg:pt-0 pb-14">
      <motion.div
        initial={{ y: "300px" }}
        animate={{ y: "0" }}
        transition={{ duration: 1.2 }}
        className="grid col-span-4 lg:col-span-2"
      >
        <div className="flex items-center justify-center flex-col gap-y-7">
          <h1 className="font-black text-2xl sm:text-3xl text-primary">
            FitTreck Club
          </h1>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-slate-300">
            Sweat, Smile <br /> And Repeat
          </h2>
          <p className="text-center w-11/12 font-medium text-slate-800 dark:text-slate-300 md:py-6 lg:py-0">
            Check out the most effective exercises personalized to you
          </p>
          <div className="relative w-full flex items-center justify-center text-center">
            <span className="hidden xl:block absolute mb-9 opacity-10 dark:opacity-20 text-7xl w-full text-secondary font-semibold">
              FitTreck App
            </span>
            <motion.div
              initial={{ y: "300px" }}
              animate={{ y: "0" }}
              transition={{ duration: 1.2 }}
              className="col-span-4 lg:col-span-2"
            >
              <div className="flex items-center justify-center flex-col gap-y-7">
                {/* ... (existing code) */}
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: "0" }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 120 }}
                >
                  <img src={Register} />
                </motion.div>

                {/* Add buttons to switch between user and trainer registration modes */}
                <div className="flex gap-4 mt-4">
                  <Link
                    to="/signup"
                    className="bg-secondary ring-offset-[#fdf4ff] dark:ring-offset-slate-800 duration-500 text-white mt-3 py-2 px-4 rounded-md ring-2 ring-offset-2 ring-secondary cursor-pointer hover:bg-primary hover:ring-primary z-10"
                  >
                    Register as User
                  </Link>
                  <Link
                    to="/trainersignup"
                    className="bg-secondary ring-offset-[#fdf4ff] dark:ring-offset-slate-800 duration-500 text-white mt-3 py-2 px-4 rounded-md ring-2 ring-offset-2 ring-secondary cursor-pointer hover:bg-primary hover:ring-primary z-10"
                  >
                    Register as Trainer
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "300px" }}
        animate={{ y: "0" }}
        transition={{ duration: 1.2 }}
        className="col-span-2 hidden lg:grid justify-end"
      >
        <img
          src={HeroBannerImg}
          alt="banner"
          className="hidden lg:block rounded-md overflow-auto"
        />
      </motion.div>
    </section>
  );
};

export default HeroBanner;

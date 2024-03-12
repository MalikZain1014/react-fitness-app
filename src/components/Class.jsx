import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import ArrowLeft from "../assets/icons/Arrow.png";
import Img1 from "../assets/images/image1.png";
import Img2 from "../assets/images/image2.png";
import Img3 from "../assets/images/image3.png";
import Img4 from "../assets/images/image4.png";
import Img5 from "../assets/images/image5.png";
import Img6 from "../assets/images/image6.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

import img1 from "../assets/images/fit-woman1.jpg";
import img2 from "../assets/images/fit-woman2.jpg";
import img3 from "../assets/images/fit-woman3.jpg";
import img4 from "../assets/images/fit-woman4.jpg";

import ArrowRight from "../assets/icons/Arrow-right.png";
import Dumbell from "../assets/icons/dumbell.png";

const Class = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const reasons = [
    "One free program for new member",
    "Reliable partners",
    "Over 140+ expert coaches",
    "Train smarter and faster than before",
  ];

  return (
    <>
      <section className="overflow-hidden items-center lg:items-start p-5 mb-24 grid gap-y-11  grid-cols-6  lg:gap-y-0 md:pt-16 lg:mt-4">
        {/* Swiper Slides */}
        <div className="order-last lg:order-first grid justify-center lg:justify-normal col-span-6  lg:col-span-3 xl:col-span-2 ">
          <div className="grid justify-start items-start lg:ml-7">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[190px] h-[190px] -sm:w-[250px] -sm:h-[300px] sm:w-[300px] sm:h-[340px]"
              lazy={true} // Lazy load images
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="relative">
                  <img
                    src={img}
                    alt=""
                    className="absolute inset-0 z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md"
                  />
                  <motion.span
                    whileHover={{
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col opacity-0 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda] p-4"
                  >
                    <h1 className="-sm:text-sm text-xs font-bold uppercase">
                      Weight training class
                    </h1>
                    <p className="-sm:text-sm text-xs p-2 text-center">
                      stias architecto voluptas repellendus. Sint aliquam
                      veritatis ipsam autem beatae error modi cumque.
                    </p>
                  </motion.span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          whileHover={{
            scale: 1.1,
            originX: 3.1,
          }}
          transition={{
            type: "spring",
            stiffness: "300",
          }}
          className="hidden xl:grid col-span-1 justify-self-center mr-24 items-center items-center lg:mt-16"
        >
          <img src={ArrowLeft} alt="" />
        </motion.div>

        {/* Description */}
        <div className="text-center grid justify-self-center lg:justify-self-start lg:text-start col-span-6 lg:col-span-3 xl:col-span-3 prose prose-slate lg:pr-7">
          <h1 className="capitalize grid justify-self-center lg:justify-self-start text-center sm:text-start font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-300">
            our classes
          </h1>
          <p className="text-slate-800 dark:text-slate-300 text-start">
            We get lots of messages about the classes actually, with people
            regularly asking us things like:
          </p>

          <motion.blockquote
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-start my-5 capitalize text-secondary">
              Why should we attend these classes? What classes are more{" "}
              <code>useful</code> for us? Will we get the desired result soon by
              participating in these classes?
            </p>
          </motion.blockquote>
          <h4 className="text-slate-800 dark:text-slate-300 text-start">
            By hovering over each photo, you can read the details of each class
            and get answers to your questions.
          </h4>
        </div>
      </section>
      <section
        id="reasons"
        className="gap-y-11 xl:gap-y-0 grid grid-cols-6 justify-between px-5 pb-20 lg:mt-16"
      >
        <div className="grid justify-center lg:justify-normal lg:ml-6 col-span-6 lg:col-span-3 xl:col-span-2">
          <h3 className="text-primary font-bold text-xl">Some Reasons</h3>
          <h1 className="my-4 capitalize font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-300">
            Why choose us?
          </h1>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <ul className="flex flex-col gap-y-4 mt-12 capitalize">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg dark:text-slate-300 text-slate-800"
                >
                  <img
                    src={Dumbell}
                    className="w-6 h-6 mr-4 object-cover"
                    alt=""
                  />
                  {reason}
                </li>
              ))}
            </ul>
          </AnimationOnScroll>
        </div>

        <motion.div
          whileHover={{
            scale: 1.1,
            originX: -3.1,
          }}
          transition={{
            type: "spring",
            stiffness: "300",
          }}
          className="hidden xl:grid col-span-1 ml-20 items-center"
        >
          <img src={ArrowRight} alt="" />
        </motion.div>

        <div
          dir="rtl"
          className="my-11 lg:my-0 lg:mr-6 grid justify-center lg:justify-normal col-span-6 lg:col-span-3"
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-[500px] max-h-[340px]">
            <div className="row-span-3 col-span-2">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src={img1}
                alt=""
              />
            </div>
            <div className="row-span-2 col-span-2">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src={img3}
                alt=""
              />
            </div>
            <div className="row-span-1 col-span-1">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src={img4}
                alt=""
              />
            </div>
            <div className="row-span-1 col-span-1">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Class;

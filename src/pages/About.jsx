import gymImage from "../assets/images/about4.png";
import yogaImage from "../assets/images/about5.png";
import cardioImage from "../assets/images/about3.jpg";
import Testimonials from "../components/Testimonials";
import ContectUs from "./ContectUs";
import ApplyTrainers from "../components/ApplyTrainers";

const About = () => {
  return (
    <>
      {/* About Section */}
      <div className="bg-transparent py- px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm ">
            <div className="p-6 sm:px-10 bg-white dark:bg-gray-800 border-b border-gray-800 dark:border-gray-600">
              <div className="container mx-auto py-8 ">
                <h1 className="text-3xl font-semibold mb-4 text-primary dark:text-secondary">
                  About Us
                </h1>
                <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                  At FitTreck, we believe that every step you take towards your
                  fitness goals is a meaningful journey. Our name embodies this
                  philosophy - 'Fit' symbolizes your dedication to health and
                  wellness, while 'Treck' evokes the idea of an adventurous
                  expedition towards your ultimate fitness destination.
                </p>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:items-center">
                  <div className="mr-6">
                    <img
                      className="w-48 h-48 rounded-full shadow-lg object-cover"
                      src={gymImage}
                      alt="Gym"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-semibold text-secondary  mb-2">
                      Welcome to FitTreck
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Step into a world where every stride is a deliberate move
                      towards your wellness goals.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Experience the tranquility of mindful fitness at FitTreck.
                    </p>
                  </div>
                </div>
                <div className="mt-8 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Our Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    Approved By
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Our Mission & Concept
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our concept is simple. Provide our local communities with the
                  most motivating fitness environment possible. As a valued
                  member, you will receive the cleanest facilities with the
                  friendliest staff guaranteed. No matter your gym experience or
                  level of fitness, you will find our atmosphere welcoming and
                  inspiring. Our mission is to ultimately help you achieve your
                  end goal.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Our Team
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Meet our team of experienced fitness trainers who are
                  dedicated to helping you achieve your fitness goals. Whether
                  you're a beginner or an experienced athlete, our team is here
                  to support you every step of the way.
                </p>
              </div>

              <div className="mt-8">
                <Testimonials />
              </div>
              <ApplyTrainers />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={gymImage}
                    alt="Gym"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Gym Workouts
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400">
                      Our state-of-the-art gym facilities offer a wide range of
                      equipment and classes to help you build strength and
                      endurance.
                    </p>
                  </div>
                </div>

                {/* Yoga Classes */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={yogaImage}
                    alt="Yoga"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Yoga Classes
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400">
                      Unwind and find inner peace with our yoga classes led by
                      experienced instructors, suitable for all levels.
                    </p>
                  </div>
                </div>

                {/* Cardio Workouts */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={cardioImage}
                    alt="Cardio"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Cardio Workouts
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400">
                      Burn calories and improve cardiovascular health with our
                      variety of cardio exercises and high-intensity workouts.
                    </p>
                  </div>
                </div>
              </div>

              <ContectUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

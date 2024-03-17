import Diabbetes from "../assets/images/Diabbetes.png";
const ForDiabetes = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8  text-gray-900 dark:text-white">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl font-extrabold   mb-6">
              Welcome to our Diabetes Patient Exercise Plan!
            </h1>
            <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Introduction:</h2>
              <p className="mb-4">
                Living with diabetes doesn't mean you have to sacrifice your
                fitness goals. In fact, regular exercise can play a crucial role
                in managing your blood sugar levels and overall health. This
                exercise plan is tailored specifically for individuals with
                diabetes, designed to help you stay active, healthy, and in
                control of your condition.
              </p>
              <p className="mb-4">
                <strong>Important Note:</strong> Before starting any new
                exercise regimen, it's essential to consult with your healthcare
                provider, especially if you have any complications related to
                diabetes or other medical conditions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Exercise Goals:</h2>
              <ol className="list-decimal list-inside">
                <li>Improve insulin sensitivity</li>
                <li>Maintain healthy blood sugar levels</li>
                <li>Increase cardiovascular health</li>
                <li>Enhance muscle strength and flexibility</li>
                <li>Promote overall well-being</li>
              </ol>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={Diabbetes} alt="Fitness" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8  text-gray-900 dark:text-white">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Exercise Routine:</h2>
          <p>
            <strong>Warm-Up (5-10 minutes):</strong>
          </p>
          <p>
            Begin each session with a gentle warm-up to prepare your body for
            exercise and reduce the risk of injury. This can include activities
            such as brisk walking, light jogging, or cycling at a moderate pace.
          </p>
          <p>
            <strong>Cardiovascular Exercise (20-30 minutes):</strong>
          </p>
          <p>
            Engage in aerobic activities that elevate your heart rate and
            promote circulation. Choose from options like:
          </p>
          <ul className="list-disc list-inside">
            <li>Brisk walking</li>
            <li>Cycling</li>
            <li>Swimming</li>
            <li>Dancing</li>
            <li>Aerobic classes</li>
          </ul>
          <p>
            Aim for at least 20-30 minutes of moderate-intensity cardio exercise
            most days of the week. Remember to monitor your blood sugar levels
            before, during, and after exercise, and adjust your regimen as
            needed.
          </p>
          {/* Add other sections */}
          {/* Strength Training, Flexibility and Balance, Cool Down and Relaxation, Hydration and Monitoring, Conclusion */}
        </div>
      </div>
    </>
  );
};

export default ForDiabetes;

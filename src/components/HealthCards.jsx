export default function HealthCards() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 mb-8 ">
        {/* BMI Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              BMI (Body Mass Index)
            </h2>
            <p className="text-slate-800 dark:text-slate-300">
              BMI is a measure of body fat based on your weight and height. It
              is a useful tool to screen for weight categories that may lead to
              health problems. BMI is calculated by dividing your weight in
              kilograms by your height in meters squared.
            </p>
            <p className="text-slate-800 dark:text-slate-300 mt-4">
              <strong className="text-secondary">Usage:</strong> BMI is commonly
              used to classify individuals into categories: underweight, normal
              weight, overweight, and obesity.
            </p>
            <p className="text-slate-800 dark:text-slate-300">
              <strong className="text-secondary">Importance:</strong>{" "}
              Maintaining a healthy BMI is important for overall health and can
              help prevent various diseases such as heart disease, diabetes, and
              certain cancers.
            </p>
          </div>
        </div>

        {/* BMR Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              BMR (Basal Metabolic Rate)
            </h2>
            <p className="text-slate-800 dark:text-slate-300">
              BMR represents the number of calories your body needs to maintain
              basic physiological functions while at rest. It is influenced by
              factors such as age, weight, height, gender, and body composition.
            </p>
            <p className="text-slate-800 dark:text-slate-300 mt-4">
              <strong className="text-secondary">Usage:</strong> BMR is used to
              calculate the number of calories your body needs to sustain itself
              at rest.
            </p>
            <p className="text-slate-800 dark:text-slate-300">
              <strong className="text-secondary">Importance:</strong>{" "}
              Understanding your BMR helps you plan your calorie intake and
              manage your weight effectively.
            </p>
          </div>
        </div>

        {/* TDEE Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              TDEE (Total Daily Energy Expenditure)
            </h2>
            <p className="text-slate-800 dark:text-slate-300">
              TDEE represents the total number of calories your body burns in a
              day, including physical activity. It is calculated by multiplying
              your BMR by an activity factor based on your daily physical
              activity level.
            </p>
            <p className="text-slate-800 dark:text-slate-300 mt-4">
              <strong className="text-secondary">Usage:</strong> TDEE helps
              determine how many calories you need to maintain, gain, or lose
              weight.
            </p>
            <p className="text-slate-800 dark:text-slate-300">
              <strong className="text-secondary">Importance:</strong>{" "}
              Understanding your TDEE is crucial for achieving weight-related
              goals and optimizing overall health and fitness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

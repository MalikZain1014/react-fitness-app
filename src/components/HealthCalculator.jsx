import { useState } from "react";

function HealthCalculator() {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bmi, setBMI] = useState("");
  const [bmr, setBMR] = useState("");
  const [tdee, setTDEE] = useState("");
  const calculateBMI = () => {
    const totalHeight = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const bmiValue = (parseInt(weight) / (totalHeight * totalHeight)) * 703;
    setBMI(bmiValue.toFixed(1));
  };

  const calculateBMR = () => {
    let bmrValue = 0;
    if (gender === "male") {
      bmrValue =
        66 +
        6.2 * parseInt(weight) +
        12.7 * (parseInt(heightFeet) * 12 + parseInt(heightInches)) -
        6.76 * parseInt(age);
    } else {
      bmrValue =
        655 +
        4.35 * parseInt(weight) +
        4.7 * (parseInt(heightFeet) * 12 + parseInt(heightInches)) -
        4.7 * parseInt(age);
    }
    setBMR(bmrValue.toFixed(1));
  };

  const calculateTDEE = () => {
    let tdeeValue = 0;
    const bmrValue = parseFloat(bmr);
    switch (activityLevel) {
      case "sedentary":
        tdeeValue = bmrValue * 1.2;
        break;
      case "lightlyActive":
        tdeeValue = bmrValue * 1.375;
        break;
      case "moderatelyActive":
        tdeeValue = bmrValue * 1.55;
        break;
      case "veryActive":
        tdeeValue = bmrValue * 1.725;
        break;
      case "extraActive":
        tdeeValue = bmrValue * 1.9;
        break;
      default:
        break;
    }
    setTDEE(tdeeValue.toFixed(1));
  };

  return (
    <>
      <div className="flex justify-center items-center  mx-8  ">
        <div className="p-4 my-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full sm:w-auto md:w-auto lg:w-auto">
          <h1 className="text-2xl font-bold mb-4 text-secondary dark:text-primary">
            Health Calculator
          </h1>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Height (feet):
              </label>
              <input
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                className="pl-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Height (inches):
              </label>
              <input
                type="number"
                value={heightInches}
                className="pl-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                onChange={(e) => setHeightInches(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Weight (lbs):
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="pl-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Age:
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="pl-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Gender:
              </label>
              <select
                className="block text-sm text-primary dark:text-secondary font-medium rounded bg-slate-300 dark:bg-slate-800"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-primary dark:text-secondary">
                Activity Level:
              </label>
              <select
                className="w-full block text-sm text-primary dark:text-secondary font-medium rounded bg-slate-300 dark:bg-slate-800"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option value="sedentary">
                  Sedentary (little to no exercise)
                </option>
                <option value="lightlyActive">
                  Lightly Active (light exercise/sports 1-3 days/week)
                </option>
                <option value="moderatelyActive">
                  Moderately Active (moderate exercise/sports 3-5 days/week)
                </option>
                <option value="veryActive">
                  Very Active (hard exercise/sports 6-7 days a week)
                </option>
                <option value="extraActive">
                  Extra Active (very hard exercise/sports & physical job or 2x
                  training)
                </option>
              </select>
            </div>

            <button
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
            <button
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
              onClick={calculateBMR}
            >
              Calculate BMR
            </button>
            <button
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
              onClick={calculateTDEE}
            >
              Calculate TDEE
            </button>
          </div>
          {bmi && (
            <div className="mt-4">
              <h2 className="text-xl text-primary  font-bold">
                Your BMI: <span className="text-secondary">{bmi}</span>
              </h2>
              <p className="text-slate-800 dark:text-slate-300">
                BMI Categories: Underweight = {"<"}18.5, Normal weight =
                18.5–24.9 <br />
                Overweight = 25–29.9, Obesity = BMI of 30 or greater
              </p>
            </div>
          )}
          {bmr && (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-primary ">
                Your BMR: <span className="text-secondary">{bmr}</span>{" "}
                calories/day
              </h2>
            </div>
          )}
          {tdee && (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-primary ">
                Your TDEE: <span className="text-secondary">{tdee}</span>{" "}
                calories/day
              </h2>
              <p className="text-slate-800 dark:text-slate-300">
                TDEE (Total Daily Energy Expenditure) represents
                <br /> the number of calories your body needs to maintain its
                current
                <br /> weight given your activity level.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HealthCalculator;

/* eslint-disable react/prop-types */

import ExerciseCard from "./ExerciseCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const response = await axios.get("http://localhost:5500/exercises");
        setExercises(response.data.data); // Set exercises state with the data array
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercisesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => prevIndex + 9);
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 9, 0));
  };

  return (
    <div className="overflow-x-hidden">
      <h1
        id="showingExercises"
        className="text-xl sm:text-2xl ml-5 font-black mt-16 text-slate-800 dark:text-slate-300"
      >
        Showing Results
      </h1>
      <section
        className="mt-9 flex flex-wrap w-full justify-evenly gap-5 overflow-y-hidden"
        id="exercises"
      >
        {exercises.slice(startIndex, startIndex + 9).map((exc, index) => (
          <ExerciseCard key={index} exercise={exc} />
        ))}
      </section>
      {exercises.length > startIndex + 9 && (
        <button
          onClick={handleClickNext}
          className="text-sm mt-4 text-blue-500 hover:underline"
        >
          Show Next Exercises
        </button>
      )}
      {startIndex > 0 && (
        <button
          onClick={handleClickPrev}
          className="text-sm mt-4 text-blue-500 hover:underline"
        >
          Show Previous Exercises
        </button>
      )}
    </div>
  );
};

export default Exercise;

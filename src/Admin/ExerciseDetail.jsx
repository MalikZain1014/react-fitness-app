import axios from "axios";
import { useState, useEffect } from "react";

export default function ExerciseDetail() {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exerciseResponse = await axios.get(
          "http://localhost:5500/exercises"
        );
        setExerciseData(exerciseResponse.data.data); // Accessing data property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto dark:text-white  bg-transparent">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
              Body Part
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
              Equipment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
              Target
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
              Gif URL
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y p-8 divide-gray-500 dark:divide-y-0">
          {exerciseData.map((exercise) => (
            <tr key={exercise._id}>
              <td className="px-6 py-4 whitespace-nowrap">{exercise.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {exercise.bodyPart}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {exercise.equipment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{exercise.target}</td>
              <td className="px-6 py-4 whitespace-nowrap">{exercise.gifUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

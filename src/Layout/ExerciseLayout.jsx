import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useState } from "react";
export default function ExerciseLayout() {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodypart] = useState("all");
  return (
    <div>
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodypart={setBodypart}
      />
      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercise={exercise}
      />
    </div>
  );
}

import React, { useMemo } from "react";
import HeroBanner from "../components/HeroBanner";
import Class from "../components/Class";
import Reasons from "../components/Reasons";
import ExerciseLayout from "../Layout/ExerciseLayout";

const Home = () => {
  // Memoize the components using useMemo to prevent unnecessary rerenders
  const MemoizedHeroBanner = useMemo(() => <HeroBanner />, []);
  const MemoizedClass = useMemo(() => <Class />, []);
  const MemoizedReasons = useMemo(() => <Reasons />, []);
  const MemoizedExerciseLayout = useMemo(() => <ExerciseLayout />, []);

  return (
    <main>
      {MemoizedHeroBanner}
      {MemoizedClass}
      {MemoizedReasons}
      {MemoizedExerciseLayout}
    </main>
  );
};

export default React.memo(Home);

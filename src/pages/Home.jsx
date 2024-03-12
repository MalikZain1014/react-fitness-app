/* eslint-disable react-refresh/only-export-components */
import React, { useMemo } from "react";
import HeroBanner from "../components/HeroBanner";
import Class from "../components/Class";

import ExerciseLayout from "../Layout/ExerciseLayout";
import Testimonials from "../components/Testimonials";
import ApplyTrainers from "../components/ApplyTrainers";

const Home = () => {
  // Memoize the components using useMemo to prevent unnecessary rerenders
  const MemoizedHeroBanner = useMemo(() => <HeroBanner />, []);
  const MemoizedClass = useMemo(() => <Class />, []);
  const MemoizedTestimonials = useMemo(() => <Testimonials />, []);

  const MemoizedExerciseLayout = useMemo(() => <ExerciseLayout />, []);
  const MemoizedApplyTrainers = useMemo(() => <ApplyTrainers />, []);

  return (
    <main>
      {MemoizedHeroBanner}
      {MemoizedClass}
      {MemoizedTestimonials}

      {MemoizedExerciseLayout}
      {MemoizedApplyTrainers}
    </main>
  );
};

export default React.memo(Home);

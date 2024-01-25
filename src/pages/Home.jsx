import HeroBanner from "../components/HeroBanner";

import Class from "../components/Class";
import Reasons from "../components/Reasons";
import ExerciseLayout from "../Layout/ExerciseLayout";

const Home = () => {
  return (
    <main className="">
      <HeroBanner />
      <Class />
      <Reasons />
      <ExerciseLayout />
    </main>
  );
};

export default Home;

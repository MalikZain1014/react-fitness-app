import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NotFound from "./pages/NotFound";
import ExerciseLayout from "./Layout/ExerciseLayout";
import { useLocation } from "react-router";
import { useEffect } from "react";
import ContectUs from "./pages/ContectUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TrainerSignUp from "./components/TrainerSignUp";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-[#fdf4ff] font-serif dark:bg-slate-800 duration-100">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/exercises" element={<ExerciseLayout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contectus" element={<ContectUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/trainersignup" element={<TrainerSignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

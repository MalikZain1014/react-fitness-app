import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NotFound from "./pages/NotFound";
import ExerciseLayout from "./Layout/ExerciseLayout";
import { useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import ContectUs from "./pages/ContectUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TrainerSignUp from "./components/TrainerSignUp";

// Step 1: Create Context for Theme
const ThemeContext = React.createContext();

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Step 2: Use State Hook for Theme
  const [theme, setTheme] = useState("light");

  // Step 4: Toggle Theme Functionality
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Step 3: Provide Theme State to Entire App
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`${
          theme === "light"
            ? "bg-white text-black dark:bg-gradient-to-r from-neutral-900 via-slate-900 to-neutral-900 dark:text-white"
            : "bg-gradient-to-r from-neutral-900 via-slate-900 to-neutral-900 text-white dark:bg-white dark:text-black"
        } duration-100`}
      >
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
    </ThemeContext.Provider>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NotFound from "./pages/NotFound";
import ExerciseLayout from "./Layout/ExerciseLayout";

import React, { useState } from "react";
import ContectUs from "./pages/ContectUs";

import TrainerSignUp from "./components/TrainerSignUp";
import RegisterNow from "./pages/RegisterNow";
import Login from "./pages/Login";
import Exercise from "./pages/Exercise";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Step 1: Create Context for Theme
const ThemeContext = React.createContext();

function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to set logged in state
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={`${
            theme === "light"
              ? "bg-white text-black dark:bg-gradient-to-r from-neutral-900 via-slate-900 to-neutral-900 dark:text-white"
              : "bg-gradient-to-r from-neutral-900 via-slate-900 to-neutral-900 text-white dark:bg-white dark:text-black"
          } duration-100`}
        >
          <NavBar theme={theme} setTheme={setTheme} loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/exercises" element={<ExerciseLayout />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contectus" element={<ContectUs />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={handleLogin} />}
            />
            <Route path="/registernow" element={<RegisterNow />} />
            <Route path="/trainersignup" element={<TrainerSignUp />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

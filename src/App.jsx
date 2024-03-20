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
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import ForDiabetes from "./pages/ForDiabetes";
import MoreDetail from "./components/MoreDetail";
import Dashboard from "./Admin/Dashboard";
import AdminLogin from "./Admin/AdminLogin";

const ThemeContext = React.createContext();

function App() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [logIn, setLogIn] = useState(!!localStorage.getItem("Admintoken"));
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLoginAdmin = () => {
    setLogIn(true);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
          {!logIn && (
            <NavBar
              theme={theme}
              setTheme={setTheme}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          )}
          <Routes>
            {!logIn && (
              <>
                <Route
                  path="/"
                  element={
                    <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                  }
                />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/exercises" element={<ExerciseLayout />} />
                <Route path="/fordiabetes" element={<ForDiabetes />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/contectus" element={<ContectUs />} />
                <Route path="/aboutus" element={<About />} />
                <Route
                  path="/login"
                  element={<Login setLoggedIn={handleLogin} />}
                />
                <Route path="/profile" element={<MoreDetail />} />
                <Route path="/registernow" element={<RegisterNow />} />
                <Route path="/trainersignup" element={<TrainerSignUp />} />
              </>
            )}
            <Route
              path="/admin"
              element={<AdminLogin setLogIn={handleLoginAdmin} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard logIn={logIn} setLogIn={setLogIn} />}
            />
          </Routes>
          {!logIn && <Footer />}
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

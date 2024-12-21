import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Banner from "./components/banner/Banner";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <Banner darkMode={darkMode} />
    </div>
  );
};

export default App;

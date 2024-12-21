import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import wet from "../../assets/images/tomchi.svg";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <div id="header" className={darkMode ? "dark-mode" : ""}>
      <div className="container header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h2>Weather App</h2>
        </div>
        <div className="header__end">
          <button onClick={toggleDarkMode}>
            <img src={wet} alt="wet" />
          </button>
          <button className="header__end__button">Shaharni tanlash</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

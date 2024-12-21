import React from "react";
import "./banner.scss";
import { WEATHERS_DAYS_ITEMS } from "../../static";

const Banner = ({ darkMode }) => {
  let WEATHERS = WEATHERS_DAYS_ITEMS?.map((el) => (
    <div key={el.id} className="banner__weather__card">
      <h2>{el.title}</h2>
      <h3>{el.text}</h3>
      <img src={el.image} alt="" />
      <h4>{el.text1}</h4>
      <h5>{el.text2}</h5>
      <p>{el.text3}</p>
    </div>
  ));

  return (
    <div id="banner" className={darkMode ? "dark-mode" : ""}>
      <div className="container banner">
        <div className="banner__button">
          <button className="banner__button__1">На неделю</button>
          <button className="banner__button__2">Отменить</button>
        </div>
        <div className="banner__weather">{WEATHERS}</div>
      </div>
    </div>
  );
};

export default Banner;

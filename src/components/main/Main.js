import React from "react";
import "./main.scss";
import sun from "../../assets/images/sun.png";
import { Weather_ITEMS } from "../../static";
import bulut from "../../assets/images/bulut.png";

const Main = ({ darkMode }) => {
  let WEATHER = Weather_ITEMS?.map((el) => (
    <div key={el.id} className="main__right__text">
      <div>
        <img src={el.image} alt="" />
      </div>
      <h2>{el.title}</h2>
      <p>{el.text}</p>
    </div>
  ));

  return (
    <div id="main" className={darkMode ? "dark-mode" : ""}>
      <div className="container main">
        <div className="main__left">
          <div className="main__left__title">
            <div className="main__left__title__text">
              <h2>20°</h2>
              <p>Сегодня</p>
            </div>
            <img src={sun} alt="" />
          </div>
          <h3>Время: 21:54</h3>
          <p className="main__left__text">Город: Санкт-Петербург</p>
        </div>
        <div className="main__right">
          {WEATHER}
          <img className="main__right__img" src={bulut} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

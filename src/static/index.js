import oqim from "../assets/images/oqim.svg";
import temprature from "../assets/images/tempereture.png";
import presure from "../assets/images/pressure.svg";
import shine from "../assets/images/shine.png";

import qoyoshli from "../assets/images/wheater 1.png";
import yomgirli from "../assets/images/wheater 2.png";

export const Weather_ITEMS = [
  {
    id: 1,
    title: "Температура",
    image: temprature,
    text: "20° - ощущается как 17°",
  },
  {
    id: 2,
    title: "Давление ",
    image: oqim,
    text: "765 мм ртутного столба - нормальное",
  },
  {
    id: 3,
    title: "Осадки",
    image: presure,
    text: "Без осадков",
  },
  {
    id: 4,
    title: "Ветер",
    image: shine,
    text: "3 м/с юго-запад - легкий ветер",
  },
];

export const WEATHERS_DAYS_ITEMS = [
  {
    id: 1,
    title: "Сегодня",
    image: qoyoshli,
    text: "28 авг",
    text1: "+18°",
    text2: "+15°",
    text3: "Облачно",
  },
  {
    id: 2,
    title: "Завтра ",
    image: yomgirli,
    text: "29 авг",
    text1: "+15°",
    text2: "+10°",
    text3: "Небольшой дождь",
  },
  {
    id: 3,
    title: "Пн",
    image: qoyoshli,
    text: "30 авг",
    text1: "+11°",
    text2: "+15°",
    text3: "Облачно",
  },
  {
    id: 4,
    title: "Вт",
    image: yomgirli,
    text: "31 авг",
    text1: "+20°",
    text2: "+12°",
    text3: "Облачно",
  },
  {
    id: 5,
    title: "Ср",
    image: yomgirli,
    text: "01 авг",
    text1: "+12°",
    text2: "+17°",
    text3: "Облачно",
  },
  {
    id: 6,
    title: "Чт",
    image: qoyoshli,
    text: "02 авг",
    text1: "+14°",
    text2: "+13°",
    text3: "Облачно",
  },
  {
    id: 7,
    title: "Пт",
    image: yomgirli,
    text: "03 авг",
    text1: "+19°",
    text2: "+15°",
    text3: "Облачно",
  },
];

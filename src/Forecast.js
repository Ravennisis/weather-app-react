import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <ul className="Forecast">
      <hr />
      <li>
        <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          alt="weather icon"
        />
        <div>Tuesday</div>
        <div>0˚ | -6˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="weather icon"
        />
        <div>Wednesday</div>
        <div>-4˚ | -12˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/03d@2x.png"
          alt="weather icon"
        />
        <div>Thursday</div>
        <div>-1˚ | -14˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          alt="weather icon"
        />
        <div>Friday</div>
        <div>1˚ | -7˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          alt="weather icon"
        />
        <div>Saturday</div>
        <div>-12˚ | -17˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/13d@2x.png"
          alt="weather icon"
        />
        <div>Sunday</div>
        <div>-3˚ | -21˚</div>
      </li>
    </ul>
  );
}
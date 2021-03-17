import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <h1>Lyon, FR</h1>
      <h2>Thu Feb 27, 11:58 AM</h2>
      <div className="Today">
        <div className="row">
          <div className="col">
            <div className="TempToday">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Clear"
                className="icon"
                id="icon"
              />
              <span className="temp" id="temp">
                15
              </span>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  ºC
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  ºF
                </a>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="realFeel">
              <span className="imgReal"></span> Feels like:
              <span id="real">14</span>ºC
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <div className="description" id="description">
              Clear Sky
            </div>
          </div>
          <div className="col">
            <div className="humidity">
              <span className="imgHum"></span> Humidity:
              <span id="humidity">51</span> %
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <div className="wind">
              <span role="img" aria-label="imgWin"></span> Wind:
              <span id="wind"> 10</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
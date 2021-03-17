import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <label>
        <input type="text" placeholder="Enter city name here" />
      </label>
      <input type="submit" value="Submit" className="SearchButton" />
      <input type="submit" value="Current City" className="CurrentCityButton" />
    </form>
  );
}
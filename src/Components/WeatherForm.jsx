import React from "react";
import { WeatherIcon } from "../icon/Weather";

const WeatherForm = ({ setCity, handleWeather }) => {
  return (
    <form className="weather-form">
      <input
        className="weather-input"
        type="text"
        placeholder="Ваш город"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <button className="weather-btn" type="submit" onClick={handleWeather}>
        <WeatherIcon />
      </button>
    </form>
  );
};

export default WeatherForm;

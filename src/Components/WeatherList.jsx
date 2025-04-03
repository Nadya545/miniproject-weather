import React from "react";

const WeatherList = ({ weather, error }) => {
  return (
    <div>
      {error && <h2 className="error-message">Неправильно введён город!</h2>}
      {weather.name && !error && (
        <>
          <h2 className="weather-city">{weather.name}</h2>
          <p className="weather-temp">{weather.main.temp}℃</p>
          <p className="weather-info">
            {
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            }
          </p>
        </>
      )}
    </div>
  );
};

export default WeatherList;

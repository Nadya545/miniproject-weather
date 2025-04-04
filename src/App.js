import { useState } from "react";
import "./App.css";
import { fetchWeather } from "./Api/Api";
import background from "./media/beach.mp4";
import WeatherList from "./Components/WeatherList";
import WeatherForm from "./Components/WeatherForm";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  async function handleWeather(event) {
    event.preventDefault();
    try {
      const data = await fetchWeather(city);

      if (data.cod !== 200) {
        setError(true);
        setWeather({});
      } else {
        setWeather(data);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setWeather({});
    }
  }
  return (
    <>
      <video src={background} autoPlay muted loop className="background" />
      <div className="App">
        <h1 className="title-weather">Погода</h1>
        <WeatherForm setCity={setCity} handleWeather={handleWeather} />
        {error ? (
          <h2 className="error-message">Неправильно введён город!</h2>
        ) : (
          <WeatherList weather={weather} error={error} />
        )}
      </div>
    </>
  );
}

export default App;

import axios from "axios";
import { baseUrl, apiKey } from "../constants";
console.log("API Key:", process.env.REACT_APP_API_KEY);

export async function fetchWeather(city) {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log("Ошибка:", err);
    throw err;
  }
}

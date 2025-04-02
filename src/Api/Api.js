import axios from "axios";

const apiKey = "2b5095c6e8dc014aff383a52deea90af";

export async function fetchWether(city) {
  const response = await axios.get(
    ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
  );
  return response.data;
}

const API_KEY = "048be16232dd4056a7f93448242806";

async function getWeather() {
  const CITY = "tambov";
  const query = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;
  const response = await fetch(query, { mode: "cors" });
  const currentWeather = await response.json();
  console.log(currentWeather.current.temp_c);
}

getWeather();

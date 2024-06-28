const form = document.querySelector("form");
form.addEventListener("submit", handleNewCitySubmit);

const cityInput = document.querySelector('input[type="search"');
async function handleNewCitySubmit(e) {
  const city = cityInput.value;

  getWeather("tambov").then(fillWeather);

  e.preventDefault();
}

const temperature = document.querySelector(".temperature");
function fillWeather(weatherObject) {
  temperature.textContent = weatherObject.temp_c + "°C";
}

async function getWeather(city) {
  const query = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const response = await fetch(query, { mode: "cors" });
  const { current, location } = await response.json();
  const { temp_c, temp_f } = current;
  const { name } = location;
  return { temp_c, temp_f, name };
}

const API_KEY = "048be16232dd4056a7f93448242806";

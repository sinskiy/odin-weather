const units = document.querySelector("ul");
units.addEventListener("change", handleNewCitySubmit);

const form = document.querySelector("form");
form.addEventListener("submit", handleNewCitySubmit);

const cityInput = document.querySelector('input[type="search"');
async function handleNewCitySubmit(e = null) {
  const city = cityInput.value;

  getWeather(city).then(fillWeather);

  e && e.preventDefault();
}

const weatherLocation = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
function fillWeather(weatherObject) {
  weatherLocation.textContent = `${weatherObject.name}, ${weatherObject.country}`;

  const mode = getCurrentMode();
  temperature.textContent = `${weatherObject[mode]}°${mode
    .at(-1)
    .toUpperCase()}`;
}

const fahrenheit = document.querySelector("#temp_f");
function getCurrentMode() {
  return fahrenheit.checked ? "temp_f" : "temp_c";
}

async function getWeather(city) {
  const query = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const response = await fetch(query, { mode: "cors" });
  const { current, location } = await response.json();
  const { temp_c, temp_f } = current;
  const { name, country } = location;
  return { temp_c, temp_f, name, country };
}

const API_KEY = "048be16232dd4056a7f93448242806";

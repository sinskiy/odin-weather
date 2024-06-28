const units = document.querySelector("ul");
units.addEventListener("change", handleNewCitySubmit);

const form = document.querySelector("form");
form.addEventListener("submit", handleNewCitySubmit);

const cityInput = document.querySelector('input[type="search"');
async function handleNewCitySubmit(e = null) {
  const city = cityInput.value;

  city && getWeather(city).then(fillWeather);

  e && e.preventDefault();
}

const weatherLocation = document.querySelector(".location");
const conditionIcon = document.querySelector(".condition-icon");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const conditionText = document.querySelector(".condition-text");
const humidity = document.querySelector(".humidity");
function fillWeather(weatherObject) {
  weatherLocation.textContent = `Weather in ${weatherObject.name}, ${weatherObject.country}`;

  conditionIcon.src = `https:${weatherObject.icon}`;

  const mode = getCurrentMode();
  temperature.textContent = `${weatherObject["temp_" + mode]}${getModeAppendix(
    mode
  )}`;
  feelsLike.textContent = `Feels like: ${
    weatherObject["feelslike_" + mode]
  }${getModeAppendix(mode)}`;

  conditionText.textContent = weatherObject.text;

  humidity.textContent = `Humidity: ${weatherObject.humidity}%`;
}

const fahrenheit = document.querySelector("#f");
function getCurrentMode() {
  return fahrenheit.checked ? "f" : "c";
}
function getModeAppendix(mode) {
  return "°" + mode.at(-1).toUpperCase();
}

async function getWeather(city) {
  const query = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const response = await fetch(query, { mode: "cors" });
  if (response.status !== 200) {
    throw new Error("Error: response status is " + response.status);
  }
  const { current, location } = await response.json();
  const { humidity, feelslike_c, feelslike_f, temp_c, temp_f } = current;
  const { text, icon } = current.condition;
  const { name, country } = location;
  return {
    humidity,
    feelslike_c,
    feelslike_f,
    temp_c,
    temp_f,
    text,
    icon,
    name,
    country,
  };
}

const API_KEY = "048be16232dd4056a7f93448242806";

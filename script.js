const form = document.querySelector("form");
form.addEventListener("submit", handleNewCitySubmit);

const cityInput = document.querySelector('input[type="search"');
function handleNewCitySubmit(e) {
  const city = cityInput.value;

  e.preventDefault();
}

// async function getWeather(city = "london") {
//   const query = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
//   const response = await fetch(query, { mode: "cors" });
//   const { current, location } = await response.json();
//   console.log(current, location);
// }

// getWeather();

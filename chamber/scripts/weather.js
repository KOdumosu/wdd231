const currentTemp = document.querySelector("#temp");
const weatherCondition = document.querySelector("#condition");
const forecastList = document.querySelector("#forecast-list");


const apiKey = "4f51126b14970855f76e6bd36859b04f";

/* Ijebu Ode Coordinates */
const lat = 6.82;
const lon = 3.92;

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw Error(await response.text());
    const data = await response.json();

    displayCurrentWeather(data);
    displayForecast(data);
  } catch (error) {
    console.error(error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.textContent = Math.round(data.list[0].main.temp);
  weatherCondition.textContent = data.list[0].weather[0].description;
}

function displayForecast(data) {
  forecastList.innerHTML = "";

  const forecasts = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3);

  forecasts.forEach(forecast => {
    const li = document.createElement("li");
    li.textContent = `${new Date(forecast.dt_txt).toLocaleDateString("en-US", {
      weekday: "short"
    })}: ${Math.round(forecast.main.temp)}°C`;
    forecastList.appendChild(li);
  });
}

getWeather();
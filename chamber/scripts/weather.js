// ELEMENTS
const currentTemp = document.querySelector("#temp");
const weatherCondition = document.querySelector("#condition");
const forecastList = document.querySelector("#forecast-list");
const weatherIcon = document.querySelector("#weather-icon");

const highTemp = document.querySelector("#high");
const lowTemp = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunriseEl = document.querySelector("#sunrise");
const sunsetEl = document.querySelector("#sunset");

// API INFO
const apiKey = "4f51126b14970855f76e6bd36859b04f";
const lat = 6.82;
const lon = 3.92;

// URLs (IMPERIAL = °F)
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// FETCH BOTH
async function getWeather() {
  try {
    const [currentResponse, forecastResponse] = await Promise.all([
      fetch(currentURL),
      fetch(forecastURL)
    ]);

    if (!currentResponse.ok || !forecastResponse.ok) {
      throw Error("Weather data fetch failed");
    }

    const currentData = await currentResponse.json();
    const forecastData = await forecastResponse.json();

    displayCurrentWeather(currentData);
    displayForecast(forecastData);

  } catch (error) {
    console.error(error);
  }
}

// CURRENT WEATHER
function displayCurrentWeather(data) {
  currentTemp.textContent = Math.round(data.main.temp);

  const description = data.weather[0].description
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  weatherCondition.textContent = description;

  highTemp.textContent = Math.round(data.main.temp_max);
  lowTemp.textContent = Math.round(data.main.temp_min);
  humidity.textContent = data.main.humidity;

  sunriseEl.textContent = formatTime(data.sys.sunrise);
  sunsetEl.textContent = formatTime(data.sys.sunset);

  const iconCode = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = description;
}

// FORECAST: TODAY + NEXT 2 DAYS
function displayForecast(data) {
  forecastList.innerHTML = "";

  const forecasts = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3); // TODAY + 2 DAYS

  forecasts.forEach(forecast => {
    const li = document.createElement("li");

    const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
      weekday: "long"
    });

    li.textContent = `${day}: ${Math.round(forecast.main.temp)}°F`;
    forecastList.appendChild(li);
  });
}

// TIME FORMATTER
function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}

// RUN
getWeather();
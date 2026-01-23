// select HTML elements
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// OpenWeatherMap API details
const myKey = "4f51126b14970855f76e6bd36859b04f";
const myLat = 6.83;
const myLon = 3.92;
const myUnits = "imperial";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=${myUnits}&appid=${myKey}`;

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// display weather results
function displayResults(data) {
  myTown.textContent = data.name;
  myDescription.textContent = data.weather[0].description;
  myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();
// Weather Widget
let weather = {
  apiKey: "0befe37e8723d02c8ab8360d2c402c36",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = `${temp} °F`;
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".weather-description").innerText = description;
    document.querySelector(".high").innerText = `High: ${temp_max} °F`;
    document.querySelector(".low").innerText = `Low: ${temp_min} °F`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} mph`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".weather-search").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
  document.querySelector(".weather-search").value = "";
});

document.querySelector(".weather-search").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
    document.querySelector(".weather-search").value = "";
  }
});

weather.fetchWeather("Charlottesville");

// Fact Widget
const factBtn = document.querySelector(".fact-btn");
const fact = document.querySelector(".fact");

function fetchFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => (fact.innerText = data.text));
}
fetchFact();
factBtn.addEventListener("click", fetchFact);

// WOD Widget
const word = document.querySelector(".word");
const pos = document.querySelector(".pos");
const definition = document.querySelector(".definition");
const wodBtn = document.querySelector(".wod-btn");
let wod;

function fetchWOD() {
  fetch("https://random-words-api.vercel.app/word")
    .then((response) => response.json())
    .then((data) => {
      word.innerText = data[0].word;
      wod = data[0].word;
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wod}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.title) {
            fetchWOD();
          } else {
            pos.innerText = `(${data[0].meanings[0].partOfSpeech})`;
            definition.innerText =
              data[0].meanings[0].definitions[0].definition;
          }
        });
    });
}
wodBtn.addEventListener("click", fetchWOD);
fetchWOD();

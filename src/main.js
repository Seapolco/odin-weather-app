
import './main.css';
import getWeather from './helpers/getWeather';

console.log('weather');

const locationInput = document.querySelector('.locationInput');

// div class="infoWrapper">
//         <div class="weatherInfo">
//             <div class="city">City</div>
//             <div class="country">Country</div>
//             <img  alt="" class="weatherIcon">
//             <div class="main">Main</div>
//             <div class="description">Description</div>
//             <div class="temp">Temp</div>
//             <div class="feelsLike">Feels Like...</div>
//             <div class="windspeed">Windspeed</div>
//         </div>

let infoWrapper = document.querySelector('.infoWrapper')
 
let cityCountry = document.querySelector('.cityCountry');
// let country = document.querySelector('.country');
let weatherIcon = document.querySelector('.weatherIcon');
let main = document.querySelector('.main');
// let description = document.querySelector('.description');
let temp = document.querySelector('.temp');
let feelsLike = document.querySelector('.feelsLike');
let windSpeed = document.querySelector('.windspeed');


let placeholderWeather = async function() {
    let data = await getWeather('London');

        let weatherData = data.weatherJson;
        let countryData = data.country;

        cityCountry.innerText = `${weatherData.name}, ${countryData}`;
        // country.innerText = countryData;

        weatherIcon.style.content = `url('https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png')`
        weatherIcon.style.display = 'block';

        main.innerText = weatherData.weather[0].main;
        // description.innerText = weatherData.weather[0].description;

        temp.innerText = `${weatherData.main.temp}°C`
        feelsLike.innerText = `Feels like: ${weatherData.main.feels_like}°C`

        windSpeed.innerText = `Windspeed : ${(weatherData.wind.speed * 2.236936).toFixed(1)} mph`

        //infoWrapper.style.display = 'grid';


}

placeholderWeather();

locationInput.addEventListener('keydown', async (e) => {
    if(e.key === 'Enter') {
        console.log('ererere');
        let location = locationInput.value;

        let data = await getWeather(location);

        let weatherData = data.weatherJson;
        let countryData = data.country;

        cityCountry.innerText = `${weatherData.name}, ${countryData}`;
        // country.innerText = countryData;

        weatherIcon.style.content = `url('https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png')`
        weatherIcon.style.display = 'block';

        main.innerText = weatherData.weather[0].main;
        // description.innerText = weatherData.weather[0].description;

        temp.innerText = `${weatherData.main.temp}°C`
        feelsLike.innerText = `Feels like: ${weatherData.main.feels_like}°C`

        windSpeed.innerText = `Windspeed : ${(weatherData.wind.speed * 2.236936).toFixed(1)} mph`

        infoWrapper.style.display = 'grid';


        console.log(weatherData.weather[0].icon)



        // console.log(weatherDataAndCouhntry)

    }
})







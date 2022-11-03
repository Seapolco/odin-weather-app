import './main.css';

console.log('weather');

const locationInput = document.querySelector('.locationInput');


const getLocation = async function(location) {

    let locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=27f41a3a4a9fba20adbd686f5a4fd5ac`);
    
    let locationJson = await locationData.json();

    console.log(locationJson)

    let latitude = await locationJson[0].lat;

    let longitude = await locationJson[0].lon;

    let state = await locationJson[0].state

    console.log(latitude,longitude);

   return  {
        latitude, 
        longitude,
        state
    }
}


const getWeather = async function(location) {

    let locationData = await getLocation(location);

    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&units=metric&appid=27f41a3a4a9fba20adbd686f5a4fd5ac`);

    let country = locationData.state;

    let weatherJson = await weatherData.json();

    console.log(weatherJson, country)
    
}

locationInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        console.log('ererere');
        let location = locationInput.value;

        getWeather(location);
    }
})




//getWeather('Poole');


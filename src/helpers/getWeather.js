
import getLocation from './getLocation';


const getWeather = async function(location) {

        let locationData = await getLocation(location);
    
        let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&units=metric&appid=27f41a3a4a9fba20adbd686f5a4fd5ac`);
    
        let country = locationData.state;
    
        let weatherJson = await weatherData.json();
    
        console.log(weatherJson, country)

        return {
            weatherJson,
            country
        }
        
}

export default getWeather
    
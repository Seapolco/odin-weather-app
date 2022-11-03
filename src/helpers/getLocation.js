

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

export default getLocation
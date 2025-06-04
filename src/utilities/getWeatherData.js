async function getData(city, countryCode) {
    
    const GEO_BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';
    const geoUrl = `${GEO_BASE_URL}?q=${city},${countryCode}&limit=1&appid=${import.meta.env.VITE_APP_ID}`;
    
    if (city === '') {
        return 'Enter area data';
    }
    
    if (countryCode === '') {
        return 'Enter country code';
    }

    try {
        
        // find location coords
        const locationResponse = await fetch(geoUrl);
        const location = await locationResponse.json();
        console.log(location)
        
        if (!locationResponse.ok) {
            return location.message;
        }
        
        // find weather data
        const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
        const weatherUrl = `${WEATHER_BASE_URL}?lat=${location[0].lat}&lon=${location[0].lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const weatherResponse = await fetch(weatherUrl);
        const data = await weatherResponse.json();

        if (!weatherResponse.ok) {
            return data.message
        }

        return {
            //data,
            humidity: data.list[0].main.humidity,
            windSpeed: data.list[0].wind.speed,
            temperature: data.list[0].main.temp.toFixed(1),
            city: location[0].name,
            country: data.city.country,
            icon: data.list[0].weather[0].icon
        };

    } catch(error) {
        console.log(error);
    }

}

const getWeatherData = (city, countryCode) => getData(city, countryCode);

export { getWeatherData };

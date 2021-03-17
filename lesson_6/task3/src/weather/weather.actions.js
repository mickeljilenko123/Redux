import { fetchWeatherData } from "./weather.gateway";
export const WEATHER_DATA = "WEATHER_DATA";
export const weatherDataRecieved = (weatherData) => {
    return {
        type: WEATHER_DATA,
        payload: {
            weatherData,
        }
    }
}

export const getWeatherData = () => {
    return function(dispatch) {
        fetchWeatherData()
            .then(data => {
                dispatch(weatherDataRecieved(data));
            });
    }
}
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelectors } from './weather.selectors';
import * as weatherActions from './weather.actions';
const Weather = ({ weatherData, getWeatherData }) => {
    // if(!weatherData) {
    //     return null;
    // }
    useEffect(() => {
        getWeatherData();
      }, []);
    
   return (
    <main className="weather">
    <h1 className="weather__title">Weather data</h1>
    <ul className="cities-list">
        {weatherData.map(weatherData => (
            <li key={weatherData.id} className="city">
            <span className="city__name">{weatherData.name}</span>
            <span className="city__temperature">{`${weatherData.temperature} F`}</span>
        </li>
        ))}
    </ul>
</main>
   )
}

const mapState = (state) => {
  return {
      weatherData: weatherDataSelectors(state),
  }
}

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
}

const connector = connect(mapState, mapDispatch)

export default connector(Weather);
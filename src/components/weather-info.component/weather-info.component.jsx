import "./weather-info.component.styles.scss";

import { useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

const WeatherInfo = () => {
  const { weather } = useContext(weatherDataContext);

  const isEmpty = !Object.keys(weather).length;
  console.log(weather);
  console.log(isEmpty);

  const {
    humidity,
    name,
    pressure,
    sunrise,
    sunset,
    temperature,
    weatherDescription,
    windSpeed,
  } = weather;

  const getSunriseTime = (sunriseTime) => {
    const sunrise = new Date(sunriseTime * 1000);

    const sunriseHours = sunrise.getHours();
    const sunriseMinutes = sunrise.getMinutes();

    if (sunriseHours < 10) {
      return `0${sunriseHours}:${sunriseMinutes}`;
    }
    return `${sunriseHours}:${sunriseMinutes}`;
  };

  const getSunsetTime = (sunsetTime) => {
    const sunset = new Date(sunsetTime * 1000);

    const sunsetHours = sunset.getHours();
    const sunsetMinutes = sunset.getMinutes();

    if (sunsetHours < 10) {
      return `0${sunsetHours}:${sunsetMinutes}`;
    }
    return `${sunsetHours}:${sunsetMinutes}`;
  };

  return (
    <>
      {isEmpty ? (
        <></>
      ) : (
        <div className="weather-container">
          <div className="city-temperature-container">
            <div className="cityname">{name} </div>
            <div className="city-temperature">{temperature} degrees</div>
            <div className="weather-description">{weatherDescription}</div>
          </div>

          <div className="sunrise-sunset-container">
            <div className="sunrise">Sunrise at: {getSunriseTime(sunrise)}</div>
            <div className="sunset">Sunset at: {getSunsetTime(sunset)}</div>
          </div>

          <div className="humidity-pressure-windspeed-container">
            <div className="humidity">Humidity: {humidity}%</div>
            <div className="pressure">Atmospheric pressure: {pressure} hPa</div>
            <div className="wind-speed">Wind speed: {windSpeed} meter\sec</div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;

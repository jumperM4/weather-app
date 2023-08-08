import { createContext, useState } from "react";

export const weatherDataContext = createContext({
  makingAPIcall: () => {},
  isWeatherData: false,
});

export const WeatherDataProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  // const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=6e953700d3384e35d16e642789c645b6&units=metric&lang=ru`;

  const makingAPIcall = async (url) => {
    try {
      const response = await fetch(url);
      const weatherData = await response.json();

      const { main, sys, weather, wind, name } = weatherData;

      const { temp, pressure, humidity } = main;
      const { sunrise, sunset } = sys;
      const [{ description }] = weather;
      const { speed } = wind;

      setWeather({
        ...weather,
        name,
        temperature: temp,
        pressure,
        humidity,
        sunrise,
        sunset,
        windSpeed: speed,
        weatherDescription: description,
        isWeatherData: true,
      });
    } catch (error) {
      alert("Failed to fetch weather information");
    }
  };

  const value = {
    weather,
    makingAPIcall,
  };
  console.log(weather);

  return (
    <weatherDataContext.Provider value={value}>
      {children}
    </weatherDataContext.Provider>
  );
};

import { createContext, useState } from "react";

export const weatherDataContext = createContext({});

export const WeatherDataProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const APIkey = `6e953700d3384e35d16e642789c645b6`;

  const paramsString = {
    appid: APIkey,
    units: "metric",
    lang: "en",
  };

  const params = new URLSearchParams(paramsString);

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
    baseURL,
    params,
  };

  return (
    <weatherDataContext.Provider value={value}>
      {children}
    </weatherDataContext.Provider>
  );
};

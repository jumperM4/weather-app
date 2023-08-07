import { useContext, useState } from "react";

import "./App.scss";

import { weatherDataContext } from "./context/weatherData.context";

import FormInput from "./components/form-input/form-input";
import Header from "./components/header/header";
import WeatherInfo from "./components/weather-info.component/weather-info.component";

function App() {
  const dataContext = useContext(weatherDataContext);
  console.log(dataContext);

  const [fetchedData, setFetchedData] = useState(dataContext);

  const makingAPIcall = async (url) => {
    // const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=ru`;
    try {
      const response = await fetch(url);
      const weatherData = await response.json();

      const { main, sys, weather, wind, name } = weatherData;

      const { temp, pressure, humidity } = main;
      const { sunrise, sunset } = sys;
      const [{ description }] = weather;
      const { speed } = wind;

      setFetchedData({
        ...fetchedData,
        name,
        temperature: temp,
        pressure,
        humidity,
        sunrise,
        sunset,
        windSpeed: speed,
        weatherDescription: description,
      });
    } catch (error) {
      alert("Failed to fetch weather information");
    }
  };

  console.log(fetchedData);

  return (
    <div className="app">
      <Header />
      <FormInput weatherContext={dataContext} onFetchData={makingAPIcall} />
      <WeatherInfo fetchedData={fetchedData} />
    </div>
  );
}

export default App;

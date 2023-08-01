import { useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./weather-info.component.styles.scss";

const WeatherInfo = () => {
  const fetchedData = useContext(weatherDataContext);
  console.log(fetchedData);

  return <div className="weather-container"></div>;
};

export default WeatherInfo;

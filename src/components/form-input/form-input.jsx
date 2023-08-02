import { useState, useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./form-input.styles.scss";

const FormInput = () => {
  const APIkey = `6e953700d3384e35d16e642789c645b6`;
  const dataContext = useContext(weatherDataContext);

  const [inputValue, setInputValue] = useState(dataContext);
  const { location } = inputValue;

  // const resetFields = () => {
  //   setInputValue(dataContext);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...dataContext, [name]: value });
  };

  const makingAPIcall = async (location, key) => {
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=ru`;
    try {
      const response = await fetch(geoUrl);
      const weatherData = await response.json();
      console.log(weatherData);

      const { main, sys, weather, wind } = weatherData;

      const { temp, pressure, humidity } = main;
      const { sunrise, sunset } = sys;
      const [{ description }] = weather;
      const { speed } = wind;

      setInputValue({
        ...inputValue,
        temperature: temp,
        pressure,
        humidity,
        sunrise,
        sunset,
        windSpeed: speed,
        weatherDescription: description,
      });
    } catch (error) {
      alert(error);
    }

    // resetFields();
  };

  console.log(inputValue);

  return (
    <div className="input-container">
      <label className="input_heading" htmlFor="location">
        Введите название города
      </label>
      <input
        className="input-field"
        type="text"
        name="location"
        placeholder="city or town"
        onChange={handleChange}
      ></input>
      <button
        className="input-button"
        type="submit"
        onClick={() => {
          makingAPIcall(location, APIkey);
        }}
      >
        CLICK
      </button>
    </div>
  );
};

export default FormInput;

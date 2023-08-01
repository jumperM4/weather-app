import { useState, useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./form-input.styles.scss";

const FormInput = () => {
  const APIkey = `6e953700d3384e35d16e642789c645b6`;
  const dataContext = useContext(weatherDataContext);

  const [inputValue, setInputValue] = useState(dataContext);
  const { location } = inputValue;

  const resetFields = () => {
    setInputValue(dataContext);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...dataContext, [name]: value });
  };

  const makingAPIcall = async (location, key) => {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${key}`;
    await fetch(geoUrl)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const [{ lat, lon }] = res;
        const getWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        fetch(getWeather)
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            console.log(res);
          });
        // async fetch()
        // setInputValue({
        //   ...inputValue,
        //   latitude: lat,
        //   longitude: lon,
        // });
        // return res;
      })
      .catch((error) => {
        console.log(error);
      });
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

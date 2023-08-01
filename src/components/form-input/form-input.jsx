import { useState, useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./form-input.styles.scss";

const FormInput = () => {
  const dataContext = useContext(weatherDataContext);

  const [inputValue, setInputValue] = useState(dataContext);

  //console.log(inputValue);

  // const resetFields = () => {
  //     setInputValue(dataContext.lo);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...dataContext, [name]: value });
  };

  console.log(inputValue);

  // const makingAPIcall = async (location, key) => {
  //   const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${key}`;
  //   await fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return res;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   resetFields();
  // };

  return (
    <div className="input-container">
      <label className="input_heading" for="location">
        Введите название города
      </label>
      <input
        className="input-field"
        type="text"
        name="location"
        placeholder="city or town"
        onChange={handleChange}
      ></input>
      <button className="input-button" type="submit">
        CLICK
      </button>
    </div>
  );
};

export default FormInput;

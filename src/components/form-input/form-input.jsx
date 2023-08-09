import { useState, useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./form-input.styles.scss";

const FormInput = () => {
  const { makingAPIcall, params, baseURL } = useContext(weatherDataContext);

  const [inputValue, setInputValue] = useState({});
  const { location } = inputValue;

  const url = baseURL + `?q=${location}&` + params.toString();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

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
        onClick={() => makingAPIcall(url)}
      >
        CLICK
      </button>
    </div>
  );
};

export default FormInput;

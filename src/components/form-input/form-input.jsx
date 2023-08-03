import { useState, useContext } from "react";

import { weatherDataContext } from "../../context/weatherData.context";

import "./form-input.styles.scss";

const FormInput = (props) => {
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
        onClick={() => props.onFetchData(location, APIkey)}
      >
        CLICK
      </button>
    </div>
  );
};

export default FormInput;

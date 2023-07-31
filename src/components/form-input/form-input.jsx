import { useState } from "react";

import "./form-input.styles.scss";

import Button from "../button/button";

const defaultFields = {
  location: "",
};

const FormInput = () => {
  const APIkey = `6e953700d3384e35d16e642789c645b6`;
  const [inputValue, setInputValue] = useState(defaultFields);
  const { location } = inputValue;

  const resetFields = () => {
    setInputValue(defaultFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...defaultFields, [name]: value });
  };

  const makingAPIcall = async (location, key) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${key}`;
    console.log(url);
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
    resetFields();
  };

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
      <Button type="submit" onClick={() => makingAPIcall(location, APIkey)} />
    </div>
  );
};

export default FormInput;

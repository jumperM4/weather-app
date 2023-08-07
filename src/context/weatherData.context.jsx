import { createContext, useState } from "react";

export const weatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  const dataContext = {};
  const [weather, setWeather] = useState(dataContext);

  return (
    <weatherDataContext.Provider value={dataContext}>
      {children}
    </weatherDataContext.Provider>
  );
};

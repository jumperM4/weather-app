import { createContext } from "react";

export const weatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  const dataContext = {
    // locationQuery: "",
  };

  return (
    <weatherDataContext.Provider value={dataContext}>
      {children}
    </weatherDataContext.Provider>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { WeatherDataProvider } from "./context/weatherData.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherDataProvider>
      <App />
    </WeatherDataProvider>
  </React.StrictMode>
);

reportWebVitals();

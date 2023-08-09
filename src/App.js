import "./App.scss";

import { WeatherDataProvider } from "./context/weatherData.context";

import FormInput from "./components/form-input/form-input";
import Header from "./components/header/header";
import WeatherInfo from "./components/weather-info.component/weather-info.component";

function App() {
  return (
    <WeatherDataProvider>
      <div className="app">
        <Header />
        <FormInput />
        <WeatherInfo />
      </div>
    </WeatherDataProvider>
  );
}

export default App;

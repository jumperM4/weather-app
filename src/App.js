import "./App.scss";

import FormInput from "./components/form-input/form-input";
import Header from "./components/header/header";
import WeatherInfo from "./components/weather-info.component/weather-info.component";

function App() {
  return (
    <div className="app">
      <Header />
      <FormInput />
      <WeatherInfo />
    </div>
  );
}

export default App;



import "./weather-info.component.styles.scss";

const WeatherInfo = (props) => {
  const { fetchedData } = props;
  const {
    humidity,
    name,
    pressure,
    sunrise,
    sunset,
    temperature,
    weatherDescription,
    windSpeed,
  } = fetchedData;

  const getSunriseTime = (sunriseTime) => {
    const sunrise = new Date(sunriseTime * 1000);

    const sunriseHours = sunrise.getHours();
    const sunriseMinutes = sunrise.getMinutes();

    if (sunriseHours < 10) {
      return `0${sunriseHours}:${sunriseMinutes}`;
    }
    return `${sunriseHours}:${sunriseMinutes}`;
  };

  const getSunsetTime = (sunsetTime) => {
    const sunset = new Date(sunsetTime * 1000);

    const sunsetHours = sunset.getHours();
    const sunsetMinutes = sunset.getMinutes();

    if (sunsetHours < 10) {
      return `0${sunsetHours}:${sunsetMinutes}`;
    }
    return `${sunsetHours}:${sunsetMinutes}`;
  };

  return (
    <div className="weather-container">
      <div className="city-temperature-container">
        <div className="cityname">{name}</div>
        <div className="city-temperature">{temperature} градусов</div>
      </div>

      <div className="weather-description">{weatherDescription}</div>

      <div className="sunrise-sunset-container">
        <div className="sunrise">Восход: {getSunriseTime(sunrise)}</div>
        <div className="sunset">Закат: {getSunsetTime(sunset)}</div>
      </div>

      <div className="humidity-pressure-windspeed-container">
        <div className="humidity">{humidity}%</div>
        <div className="pressure">{pressure}мм.рт.ст</div>
        <div className="wind-speed">{windSpeed} м\с</div>
      </div>
    </div>
  );
};

export default WeatherInfo;

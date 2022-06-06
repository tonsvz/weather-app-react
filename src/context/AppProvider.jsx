import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { iconImages } from '../utils/constants';

// import axios from 'axios';

const AppContext = createContext();

export const UserAppContext = () => {
  return useContext(AppContext);
};

// Image for the weather
export const getWeatherIcon = (rangeId) => {
  switch (true) {
    case rangeId >= 200 && rangeId <= 232:
      console.log('this is thunderstorm');
      return iconImages.thunderstorm;
    case rangeId >= 300 && rangeId <= 321:
      console.log('this is drizzle');
      return iconImages.drizzle;
    case rangeId >= 500 && rangeId <= 531:
      console.log('this is rain');
      return iconImages.rain;
    case rangeId >= 600 && rangeId <= 622:
      console.log('this is snow');
      return iconImages.snow;
    case rangeId >= 701 && rangeId <= 781:
      console.log('this is atmosphere');
      return iconImages.atmosphere;
    case rangeId === 800:
      console.log('this is clear sky');
      return iconImages.clear;
    case rangeId >= 801 && rangeId <= 804:
      console.log('this is clouds');
      return iconImages.clouds;
    default:
  }
};

export const AppProvider = ({ children }) => {
  const [location, getLocation] = useState('Quito');
  console.log(location);

  const currentWeather = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_CURRENT_WEATHER}${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=${units}`
    );
    console.log(response.data);
    return response.data;
  };

  // Weather States
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [pressure, setPressure] = useState('');
  const [weatherId, setWeatherId] = useState('');

  // Forecast States

  const [forecastData, setForecastData] = useState();

  // Unit Converter State
  const [units, setUnits] = useState('metric');
  const [unitSymbol, setUnitSymbol] = useState('℃');

  const getWeather = async () => {
    let weather;

    try {
      const data = await currentWeather();
      // console.log(data);
      weather = data;
      // console.log(data.base);
    } catch (err) {
      console.log(err);
    }
    try {
      setCity(weather.name);
      setCountry(weather.sys.country);
      setTemp(weather.main.temp);
      setWeather(weather.weather[0].description);
      setWind(weather.wind.speed);
      setHumidity(weather.main.humidity);
      setVisibility(weather.visibility);
      setPressure(weather.main.pressure);
      setWeatherId(weather.weather[0].id);
    } catch (err) {
      console.log(err);
    }
  };

  const getForecast = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_FORECAST_5_DAYS}${location}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=${units}`
      )
      .then((response) => {
        // console.log(response.data);
        setForecastData(response.data.list);
        console.log(response.data.list);
      });
  };

  useEffect(() => {
    getWeather();
    getForecast();
  }, []);

  return (
    <AppContext.Provider
      value={{
        getLocation,
        currentWeather,
        getWeather,
        getForecast,
        setCountry,
        setForecastData,
        location,
        city,
        temp,
        weather,
        wind,
        humidity,
        visibility,
        pressure,
        country,
        forecastData,
        getWeatherIcon,
        weatherId,
        units,
        setUnits,
        setUnitSymbol,
        unitSymbol,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

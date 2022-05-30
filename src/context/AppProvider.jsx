import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';

// import axios from 'axios';

const AppContext = createContext();

export const UserAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [location, getLocation] = useState('Quito');

  const currentWeather = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_CURRENT_WEATHER}${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );

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

  // Forecast States

  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

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
      setWeather(weather.weather[0].main);
      setWind(weather.wind.speed);
      setHumidity(weather.main.humidity);
      setVisibility(weather.visibility);
      setPressure(weather.main.pressure);
    } catch (err) {
      console.log(err);
    }
  };

  const getForecast = () => {
    axios
      .get(
        `${import.meta.env.VITE_FORECAST_5_DAYS}${location}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

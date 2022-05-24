import axios from 'axios';
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';

// import axios from 'axios';

const AppContext = createContext();

export const UserAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [location, getLocation] = useState('Quito');

  const fetchDataCurrentWeather = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_CURRENT_WEATHER}${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );

    return response.data;
  };

  // const fetchData = useCallback(() => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');

  const getForecast = async () => {
    let forecast;

    try {
      const data = await fetchDataCurrentWeather();
      console.log(data);
      forecast = data;
      console.log(data.base);
    } catch (err) {
      console.log(err);
    }
    try {
      setCity(forecast.name);
      setCountry(forecast.sys.country);
      setTemp(forecast.main.temp);
      setWeather(forecast.weather[0].main);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  const nextDaysWeather = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_FORECAST_5_DAYS}${location}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    nextDaysWeather();
  });
  //   axios
  //     .get(
  //       `${import.meta.env.VITE_CURRENT_WEATHER}${data}&appid=${
  //         import.meta.env.VITE_API_KEY
  //       }&units=metric`
  //     )
  //     .then((res) => {
  //       getData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [data]);

  return (
    <AppContext.Provider
      value={{
        location,
        getLocation,
        fetchDataCurrentWeather,
        city,
        temp,
        weather,
        getForecast,
        setCountry,
        country,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

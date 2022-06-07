import React from 'react';
import '../styles/_FDForecast.scss';
import { UserAppContext } from '../context/AppProvider';

export const FiveDaysForecast = () => {
  const { forecastData, getWeatherIcon, unitSymbol, isFahrenheit } =
    UserAppContext();

  // Check the date
  let getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    // console.log(date.toLocaleDateString(locale, { weekday: 'long' }));
    return date.toLocaleDateString(locale, { weekday: 'long' });
  };

  // create a function to conver farhenheit to celsius

  return (
    <div className='fd-card-layout'>
      {forecastData &&
        forecastData
          .filter((e) => {
            return e.dt_txt.includes('09:00:00');
          })
          .map((item, index) => {
            return (
              <div className='fd-wrapper' key={index}>
                <div className='fd-day'>
                  <h1>{getDayName(item.dt_txt, 'en-US')}</h1>
                </div>

                <div className='fd-icon'>
                  <div className='forecast-icon'>
                    <img
                      src={getWeatherIcon(item.weather[0].id)}
                      alt='weather-image'
                    />
                  </div>
                </div>

                <div className='fd-temps'>
                  <p>
                    {isFahrenheit
                      ? Math.round((item.main.temp * 9) / 5 + 32)
                      : Math.round(item.main.temp)}
                    {unitSymbol}
                  </p>

                  <p>
                    {isFahrenheit
                      ? Math.round((item.main.feels_like * 9) / 5 + 32)
                      : Math.round(item.main.feels_like)}
                    {unitSymbol}
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

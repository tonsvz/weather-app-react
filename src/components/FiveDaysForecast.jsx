import React from 'react';
import '../styles/_FDForecast.scss';
import { UserAppContext } from '../context/AppProvider';
export const FiveDaysForecast = () => {
  const { forecastData } = UserAppContext();

  // Check the date
  let getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    // console.log(date.toLocaleDateString(locale, { weekday: 'long' }));
    return date.toLocaleDateString(locale, { weekday: 'long' });
  };

  return (
    <div className='fd-card-layout'>
      {forecastData &&
        forecastData
          .filter((e) => {
            return e.dt_txt.includes('06:00:00');
          })
          .map((item, index) => {
            return (
              <div className='fd-wrapper' key={index}>
                <div className='fd-day'>
                  <h1>{getDayName(item.dt_txt, 'en-US')}</h1>
                </div>

                <div className='fd-icon'>
                  <div className='forecast-icon'></div>
                </div>

                <div className='fd-temps'>
                  <p>{Math.round(item.main.temp)}℃</p>

                  <p>{Math.round(item.main.feels_like)}℃</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

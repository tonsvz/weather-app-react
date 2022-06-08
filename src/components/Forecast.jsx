import React, { useEffect, useState } from 'react';
import '../styles/_Forecast.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Search } from './Search';
import { UserAppContext } from '../context/AppProvider';
// raleway font from google

export const Forecast = () => {
  const {
    city,
    temp,
    weather,
    country,
    weatherId,
    getWeatherIcon,
    unitSymbol,
    isFahrenheit,
  } = UserAppContext();

  // Todays date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  return (
    <div className='forecast-container'>
      <Search />
      <div className='forecast-background-img'>
        <div className='weather-bg-container animate'>
          <div className='forecast-img'>
            <img src='/images/Cloud-background.png' alt='' />
          </div>
          <div className='forecast-img'>
            <img src='/images/Cloud-background.png' alt='' />
          </div>
          <div className='forecast-img'>
            <img src='/images/Cloud-background.png' alt='' />
          </div>
          <div className='forecast-img'>
            <img src='/images/Cloud-background.png' alt='' />
          </div>
          {/* <div className='forecast-img'></div> */}
        </div>

        <div className='forecast-items'>
          <div className='forecast-temp-wrapper'>
            <div className='forecast-temp-img'>
              <img src={getWeatherIcon(weatherId)} alt='image' />
            </div>
          </div>

          <div className='forecast-temp'>
            <span>
              {isFahrenheit
                ? Math.round((Math.round(temp) * 9) / 5 + 32)
                : Math.round(Math.round(temp))}
            </span>

            <span>{unitSymbol}</span>
          </div>

          <div className='forecast-details'>
            <h1>{weather}</h1>
          </div>

          <div className='forecast-date-wrapper'>
            <div className='day'>
              <h1>Today</h1>
              <span>•</span>
            </div>

            <div className='forecast-date'>
              <h1>{today}</h1>
            </div>
          </div>

          <div className='forecast-location'>
            <span className='location-icon'>
              <HiOutlineLocationMarker />
            </span>{' '}
            <h1>
              {city} - {country}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

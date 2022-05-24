import React, { useEffect } from 'react';
import '../styles/_Search.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { UserAppContext } from '../context/AppProvider';
export const Search = () => {
  const { getLocation, fetchDataCurrentWeather, getForecast } =
    UserAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    getForecast();
  };

  return (
    <div className='search-component-container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='search-input'
          type='text'
          placeholder='Search for a location'
          onChange={(e) => getLocation(e.target.value)}
        />
      </form>
    </div>
  );
};

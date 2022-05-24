import React, { useEffect } from 'react';
import { UserAppContext } from '../context/AppProvider';
export const Test = () => {
  const { getLocation, fetchData } = UserAppContext();
  // create a handler to fetch data

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <input
          type='text'
          onChange={(e) => {
            getLocation(e.target.value);
          }}
        />
        <button type='submit'>Change City</button>
      </form>
    </div>
  );
};

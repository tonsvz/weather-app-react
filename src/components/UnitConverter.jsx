import React, { useEffect, useState } from 'react';
import '../styles/_UnitConverter.scss';
import { UserAppContext } from '../context/AppProvider';

export const UnitConverter = () => {
  const { setUnitSymbol, setUnits, isFahrenheit, setIsFahrenheit } =
    UserAppContext();

  return (
    <div className='unit-buttons'>
      <button
        className={isFahrenheit ? 'not-selected' : 'selected'}
        onClick={() => {
          setUnitSymbol('℃');
          setIsFahrenheit(false);
        }}
      >
        ℃
      </button>
      <button
        className={isFahrenheit ? 'selected' : 'not-selected'}
        onClick={() => {
          setUnitSymbol('℉');
          setIsFahrenheit(true);
        }}
      >
        ℉
      </button>
    </div>
  );
};

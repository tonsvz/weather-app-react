import React, { useEffect, useState } from 'react';
import '../styles/_UnitConverter.scss';
import { UserAppContext } from '../context/AppProvider';

export const UnitConverter = () => {
  const { setUnitSymbol, setUnits, getWeather, getForecast } = UserAppContext();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      setUnitSymbol('℉');
      setUnits('metric');
      getWeather();
      getForecast();
    } else {
      setUnitSymbol('℃');
      setUnits('imperial');
      getWeather();
      getForecast();
    }
  }, [selected]);

  return (
    <div className='unit-buttons'>
      <button
        className={selected ? 'not-selected' : 'selected'}
        onClick={() => {
          setUnitSymbol('℃');
          setSelected(false);
        }}
      >
        ℃
      </button>
      <button
        className={selected ? 'selected' : 'not-selected'}
        onClick={() => {
          setUnitSymbol('℉');
          setSelected(true);
        }}
      >
        ℉
      </button>
    </div>
  );
};

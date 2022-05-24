import React from 'react';
import '../styles/_ForecastLayout.scss';
import { Highlights } from './Highlights';
import { FiveDaysForecast } from './FiveDaysForecast';

export const ForecastLayout = () => {
  return (
    <div className='forecast-layout-component'>
      <div className='forecast-layout-wrapper'>
        <FiveDaysForecast />
        <Highlights />
      </div>
    </div>
  );
};

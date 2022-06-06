import React from 'react';
import '../styles/_ForecastLayout.scss';
import { Highlights } from './Highlights';
import { FiveDaysForecast } from './FiveDaysForecast';
import { UnitConverter } from './UnitConverter';

export const ForecastLayout = () => {
  return (
    <div className='forecast-layout-component'>
      <div className='forecast-layout-wrapper'>
        <UnitConverter />
        <FiveDaysForecast />
        <Highlights />
      </div>
    </div>
  );
};

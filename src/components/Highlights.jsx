import React from 'react';
import '../styles/_Highlights.scss';
import { FaLocationArrow } from 'react-icons/fa';

export const Highlights = () => {
  return (
    <div className='highlights-component-container'>
      <div className='highlights-card-wrapper'>
        <div className='header-title'>
          <h1>Today's Highlights'</h1>
        </div>
        <div className='cards-wrapper'>
          <div className='wind-status-card'>
            <div className='card-header'>
              <h1>Wind Status</h1>
            </div>

            <div className='wind-details'>
              <h1>7</h1>
              <span>mph</span>
            </div>

            <div className='wind-position-details'>
              <span className='wind-icon'>
                <FaLocationArrow />
              </span>
              <p className='wind-coordinates'>WSW</p>
            </div>
          </div>

          <div className='humidity-status-card'>
            <div className='card-header'>
              <h1>Humidity</h1>
            </div>

            <div className='humidity-details'>
              <h1>84%</h1>
            </div>

            <div className='humidity-progress-bar'>
              <div className='progress-bar'></div>
            </div>
          </div>
        </div>
        <div className='cards-wrapper'>
          <div className='visibility-status-card '>
            <div className='card-header'>
              <h1>Visibility</h1>
            </div>

            <div className='visibility-details'>
              <h1>6,4</h1>
              <span>miles</span>
            </div>
          </div>

          <div className='air-status-card'>
            <div className='card-header'>
              <h1>Air Pressure</h1>
            </div>

            <div className='air-details'>
              <h1>998</h1>
              <span>mb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

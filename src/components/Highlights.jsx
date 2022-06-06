import React, { useState } from 'react';
import '../styles/_Highlights.scss';
import { FaLocationArrow } from 'react-icons/fa';
import { UserAppContext } from '../context/AppProvider';
import { Footer } from './Footer';

export const Highlights = () => {
  const { wind, humidity, visibility, pressure } = UserAppContext();

  return (
    <div className='highlights-component-container'>
      <div className='highlights-card-wrapper'>
        <div className='header-title'>
          <h1>Today's Highlights</h1>
        </div>
        <div className='cards-wrapper'>
          <div className='wind-status-card'>
            <div className='card-header'>
              <h1>Wind Status</h1>
            </div>

            <div className='wind-details'>
              <h1>{wind}</h1>
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
              <h1>{humidity}%</h1>
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
              <h1>{visibility}</h1>
              <span>miles</span>
            </div>
          </div>

          <div className='air-status-card'>
            <div className='card-header'>
              <h1>Air Pressure</h1>
            </div>

            <div className='air-details'>
              <h1>{pressure}</h1>
              <span>mb</span>
            </div>
          </div>
        </div>
        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

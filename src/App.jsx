import { useState, useContext, useEffect } from 'react';
import './App.css';
import { AppProvider } from './context/AppProvider';
import { Forecast } from './components/Forecast';
import { Search } from './components/Search';
import { ForecastLayout } from './components/ForecastLayout';

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <Forecast />
        <ForecastLayout />
      </div>
    </AppProvider>
  );
}

export default App;

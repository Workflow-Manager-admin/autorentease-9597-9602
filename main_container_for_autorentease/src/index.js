import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';

// Import and configure Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faCar, 
  faUser, 
  faBars, 
  faStar, 
  faGasPump, 
  faUsers,
  faCogs,
  faCarSide,
  faCalendar,
  faSearch,
  faSort,
  faShieldAlt,
  faClock,
  faMoneyBillWave,
  faArrowLeft,
  faRoad,
  faCalendarAlt,
  faLocationDot,
  faCreditCard,
  faLock
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library for use throughout the app
library.add(
  fab,
  faCar, 
  faUser, 
  faBars, 
  faStar, 
  faGasPump, 
  faUsers,
  faCogs,
  faCarSide,
  faCalendar,
  faSearch,
  faSort,
  faShieldAlt,
  faClock,
  faMoneyBillWave,
  faArrowLeft,
  faRoad,
  faCalendarAlt,
  faLocationDot,
  faCreditCard,
  faLock
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

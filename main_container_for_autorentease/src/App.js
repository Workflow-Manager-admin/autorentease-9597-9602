import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';

// PUBLIC_INTERFACE
/**
 * Main App component for AutoRentEase.
 * Sets up the application structure with routing.
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/booking" element={<Booking />} />
          {/* Additional routes would be added here in a full implementation */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import CarCard from './CarCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * CarList component for AutoRentEase.
 * Displays a list of available cars with filtering and sorting options.
 * 
 * @param {Array} cars - Array of car objects to display
 */
const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <div className="car-filter">
        <div className="filter-count">
          {cars.length} cars found
        </div>
        
        <div className="filter-options">
          <div className="select-container">
            <select className="select-input">
              <option value="recommended">Recommended</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
            <FontAwesomeIcon icon={faSort} className="select-icon" />
          </div>
        </div>
      </div>
      
      <div className="car-grid">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;

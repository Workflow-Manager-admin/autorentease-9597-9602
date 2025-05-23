import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * SearchForm component for AutoRentEase.
 * Allows users to search for available cars based on location, dates, and car type.
 */
const SearchForm = () => {
  // In a real implementation, this would use state and form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search form submitted');
    // Would typically trigger a search action or navigation
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="search-form-grid">
          <div className="search-group">
            <label className="search-label">
              <FontAwesomeIcon icon={faLocationDot} /> Pickup Location
            </label>
            <input 
              type="text" 
              placeholder="City, Airport, or Address"
              className="search-input"
            />
          </div>
          
          <div className="search-group">
            <label className="search-label">
              <FontAwesomeIcon icon={faCalendarAlt} /> Pickup Date
            </label>
            <input 
              type="date" 
              className="search-input"
            />
          </div>
          
          <div className="search-group">
            <label className="search-label">
              <FontAwesomeIcon icon={faCalendarAlt} /> Return Date
            </label>
            <input 
              type="date" 
              className="search-input"
            />
          </div>
          
          <div className="search-group">
            <label className="search-label">Car Type</label>
            <select className="search-input">
              <option value="">Any Type</option>
              <option value="economy">Economy</option>
              <option value="compact">Compact</option>
              <option value="midsize">Midsize</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
              <option value="convertible">Convertible</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="btn search-button">
          <FontAwesomeIcon icon={faSearch} /> Search Cars
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

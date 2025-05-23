import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faGasPump, 
  faUsers, 
  faCogs, 
  faCarSide 
} from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * CarCard component for AutoRentEase.
 * Displays information about an individual car for rental.
 * 
 * @param {Object} car - The car object containing details of the car
 */
const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <Link to={`/car/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={car.image} alt={car.name} className="car-image" />
        
        <div className="car-content">
          <div className="car-header">
            <div>
              <h3 className="car-title">{car.name}</h3>
              <div className="car-type">{car.type}</div>
            </div>
            
            <div className="car-rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              {car.rating}
            </div>
          </div>
          
          <div className="car-features">
            <div className="car-feature">
              <FontAwesomeIcon icon={faUsers} /> {car.capacity} People
            </div>
            <div className="car-feature">
              <FontAwesomeIcon icon={faGasPump} /> {car.fuelType}
            </div>
            <div className="car-feature">
              <FontAwesomeIcon icon={faCogs} /> {car.transmission}
            </div>
            <div className="car-feature">
              <FontAwesomeIcon icon={faCarSide} /> {car.mileage}
            </div>
          </div>
          
          <div className="car-divider"></div>
          
          <div className="car-footer">
            <div className="car-price">
              ${car.pricePerDay} <span className="car-price-period">/day</span>
            </div>
            <button className="btn">Rent Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;

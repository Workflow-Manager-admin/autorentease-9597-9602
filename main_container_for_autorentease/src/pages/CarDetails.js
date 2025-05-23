import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faArrowLeft, 
  faGasPump, 
  faUsers, 
  faCogs,
  faRoad,
  faCar,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * CarDetails page component for AutoRentEase.
 * Displays detailed information about a specific car and booking options.
 */
const CarDetails = () => {
  const { id } = useParams();
  
  // This would typically fetch from an API or context in a real application
  // For this example, we're hard-coding a car object
  const car = {
    id: parseInt(id, 10),
    name: 'Toyota Camry XLE',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    ],
    capacity: 5,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: 'Unlimited',
    year: 2023,
    rating: 4.8,
    reviewCount: 124,
    pricePerDay: 65,
    description: 'The Toyota Camry XLE combines comfort, reliability, and efficiency in a stylish package. This hybrid sedan features a spacious interior, advanced safety features, and excellent fuel economy. Perfect for both city driving and longer trips, the Camry offers a smooth ride, ample trunk space, and the latest technology including Apple CarPlay and Android Auto integration.'
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Would typically handle form submission and navigation to a confirmation page
    console.log('Booking submitted');
  };

  return (
    <div className="container details-container">
      <div className="details-header">
        <div className="details-title-section">
          <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to All Cars
          </Link>
          <h1>{car.name}</h1>
          <div className="details-rating">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <span>{car.rating} ({car.reviewCount} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="details-images">
        <img src={car.image} alt={car.name} className="details-main-image" />
        <div className="details-image-grid">
          {car.gallery.map((image, index) => (
            <img key={index} src={image} alt={`${car.name} view ${index + 1}`} className="details-small-image" />
          ))}
        </div>
      </div>
      
      <div className="details-info">
        <div className="details-main">
          <h2>About {car.name}</h2>
          <p className="details-description">{car.description}</p>
          
          <h3 style={{marginTop: '32px', marginBottom: '16px'}}>Specifications</h3>
          <div className="details-specs">
            <div className="spec-item">
              <FontAwesomeIcon icon={faCar} className="spec-icon" />
              <span className="spec-label">Type</span>
              <span className="spec-value">{car.type}</span>
            </div>
            <div className="spec-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="spec-icon" />
              <span className="spec-label">Year</span>
              <span className="spec-value">{car.year}</span>
            </div>
            <div className="spec-item">
              <FontAwesomeIcon icon={faUsers} className="spec-icon" />
              <span className="spec-label">Capacity</span>
              <span className="spec-value">{car.capacity} People</span>
            </div>
            <div className="spec-item">
              <FontAwesomeIcon icon={faGasPump} className="spec-icon" />
              <span className="spec-label">Fuel Type</span>
              <span className="spec-value">{car.fuelType}</span>
            </div>
            <div className="spec-item">
              <FontAwesomeIcon icon={faCogs} className="spec-icon" />
              <span className="spec-label">Transmission</span>
              <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="spec-item">
              <FontAwesomeIcon icon={faRoad} className="spec-icon" />
              <span className="spec-label">Mileage</span>
              <span className="spec-value">{car.mileage}</span>
            </div>
          </div>
        </div>
        
        <div className="details-sidebar">
          <div className="booking-card">
            <div className="booking-price">
              ${car.pricePerDay} <span className="car-price-period">/day</span>
            </div>
            
            <form className="booking-form" onSubmit={handleBooking}>
              <div className="booking-dates">
                <div className="search-group">
                  <label className="search-label">Pickup Date</label>
                  <input type="date" className="search-input" required />
                </div>
                <div className="search-group">
                  <label className="search-label">Return Date</label>
                  <input type="date" className="search-input" required />
                </div>
              </div>
              
              <div className="search-group">
                <label className="search-label">Pickup Location</label>
                <input type="text" className="search-input" placeholder="City or Airport" required />
              </div>
              
              <div className="booking-total">
                <div className="total-row">
                  <span className="total-label">Base price</span>
                  <span>${car.pricePerDay} x 1 day</span>
                </div>
                <div className="total-row">
                  <span className="total-label">Tax & fees</span>
                  <span>${Math.round(car.pricePerDay * 0.15)}</span>
                </div>
                <div className="total-row total-final">
                  <span>Total</span>
                  <span>${car.pricePerDay + Math.round(car.pricePerDay * 0.15)}</span>
                </div>
              </div>
              
              <button type="submit" className="btn booking-button">Reserve Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

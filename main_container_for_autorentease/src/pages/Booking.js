import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCreditCard, 
  faLock, 
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * Booking page component for AutoRentEase.
 * Provides an interface for customers to complete their car rental booking.
 */
const Booking = () => {
  // This would typically come from the navigation state in a real implementation
  const carDetails = {
    id: 1,
    name: 'Toyota Camry XLE',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    pricePerDay: 65,
    days: 3,
    pickupDate: '2023-07-15',
    returnDate: '2023-07-18',
    pickupLocation: 'San Francisco Airport',
    tax: 29,
    totalPrice: 224
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Would typically handle form submission, payment, and confirmation
    console.log('Booking submitted');
    // After successful booking, would navigate to a confirmation page
    // navigation('/booking/confirmation');
  };

  return (
    <div className="container" style={{ marginTop: '32px', marginBottom: '64px' }}>
      <Link to={`/car/${carDetails.id}`} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to car details
      </Link>
      
      <h1 style={{ marginBottom: '32px' }}>Complete Your Booking</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        <div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '24px', 
            marginBottom: '24px', 
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)' 
          }}>
            <h2 style={{ marginBottom: '24px' }}>Personal Information</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="search-group">
                  <label className="search-label">First Name</label>
                  <input type="text" className="search-input" required />
                </div>
                <div className="search-group">
                  <label className="search-label">Last Name</label>
                  <input type="text" className="search-input" required />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="search-group">
                  <label className="search-label">Email Address</label>
                  <input type="email" className="search-input" required />
                </div>
                <div className="search-group">
                  <label className="search-label">Phone Number</label>
                  <input type="tel" className="search-input" required />
                </div>
              </div>
              
              <div className="search-group" style={{ marginBottom: '16px' }}>
                <label className="search-label">Address</label>
                <input type="text" className="search-input" required />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="search-group">
                  <label className="search-label">City</label>
                  <input type="text" className="search-input" required />
                </div>
                <div className="search-group">
                  <label className="search-label">State</label>
                  <input type="text" className="search-input" required />
                </div>
                <div className="search-group">
                  <label className="search-label">Zip Code</label>
                  <input type="text" className="search-input" required />
                </div>
              </div>
              
              <div className="search-group">
                <label className="search-label">Driver's License Number</label>
                <input type="text" className="search-input" required />
              </div>
            </form>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '24px', 
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)' 
          }}>
            <h2 style={{ marginBottom: '24px' }}>Payment Information</h2>
            
            <form>
              <div className="search-group" style={{ marginBottom: '16px' }}>
                <label className="search-label">Card Holder Name</label>
                <input type="text" className="search-input" placeholder="Name as appears on card" required />
              </div>
              
              <div className="search-group" style={{ marginBottom: '16px', position: 'relative' }}>
                <label className="search-label">Card Number</label>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="0000 0000 0000 0000" 
                  required 
                />
                <FontAwesomeIcon 
                  icon={faCreditCard} 
                  style={{ 
                    position: 'absolute', 
                    right: '16px', 
                    bottom: '13px', 
                    color: 'var(--text-secondary)' 
                  }} 
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div className="search-group">
                  <label className="search-label">Expiration Date</label>
                  <input type="text" className="search-input" placeholder="MM/YY" required />
                </div>
                <div className="search-group">
                  <label className="search-label">CVV</label>
                  <input type="text" className="search-input" placeholder="123" required />
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <FontAwesomeIcon 
                  icon={faLock} 
                  style={{ color: 'var(--success-color)' }} 
                />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Your payment information is secure and encrypted
                </span>
              </div>
              
              <button type="submit" className="btn" style={{ width: '100%' }}>Complete Booking</button>
            </form>
          </div>
        </div>
        
        <div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '24px', 
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
            position: 'sticky',
            top: '100px'
          }}>
            <h2 style={{ marginBottom: '24px' }}>Booking Summary</h2>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
              <img 
                src={carDetails.image} 
                alt={carDetails.name} 
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              <div>
                <h3 style={{ margin: 0 }}>{carDetails.name}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                  ${carDetails.pricePerDay}/day
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Pickup Date:</span>
                <strong>{carDetails.pickupDate}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Return Date:</span>
                <strong>{carDetails.returnDate}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Pickup Location:</span>
                <strong>{carDetails.pickupLocation}</strong>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Rental Period:</span>
                <span>{carDetails.days} days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Car Rental:</span>
                <span>${carDetails.pricePerDay} x {carDetails.days} days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span>Taxes & Fees:</span>
                <span>${carDetails.tax}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-color)',
                fontWeight: 700,
                fontSize: '1.2rem'
              }}>
                <span>Total:</span>
                <span>${carDetails.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

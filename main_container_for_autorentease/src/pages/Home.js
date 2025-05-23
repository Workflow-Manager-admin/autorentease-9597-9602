import React from 'react';
import SearchForm from '../components/SearchForm';
import CarList from '../components/CarList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faClock, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

// PUBLIC_INTERFACE
/**
 * Home page component for AutoRentEase.
 * Displays the main landing page with search functionality and popular cars.
 */
const Home = () => {
  // This would typically come from an API or context in a real application
  const featuredCars = [
    {
      id: 1,
      name: 'Toyota Camry',
      type: 'Sedan',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      capacity: 5,
      fuelType: 'Hybrid',
      transmission: 'Automatic',
      mileage: 'Unlimited',
      rating: 4.8,
      pricePerDay: 65
    },
    {
      id: 2,
      name: 'Honda CR-V',
      type: 'SUV',
      image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      capacity: 5,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      mileage: 'Unlimited',
      rating: 4.7,
      pricePerDay: 75
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1617469767053-7654b6c2c05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      capacity: 5,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      mileage: 'Unlimited',
      rating: 4.9,
      pricePerDay: 120
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      type: 'Electric',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      capacity: 5,
      fuelType: 'Electric',
      transmission: 'Automatic',
      mileage: 'Unlimited',
      rating: 4.9,
      pricePerDay: 110
    }
  ];

  return (
    <>
      <div className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Find Your Perfect Rental Car</h1>
          <p className="hero-subtitle">
            Discover our wide selection of cars for any occasion. 
            Easy booking, competitive rates, and quality service.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-80px' }}>
        <SearchForm />

        <div style={{ marginBottom: '64px' }}>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We provide the best service in the car rental industry
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px', 
            marginTop: '24px' 
          }}>
            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '24px', 
                color: 'var(--primary-color)',
                backgroundColor: '#EFF3FD',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>100% Secure Payments</h3>
              <p>We ensure secure payment with PCI DSS compliance</p>
            </div>

            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '24px', 
                color: 'var(--primary-color)',
                backgroundColor: '#EFF3FD',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>24/7 Customer Support</h3>
              <p>Our team is always ready to help you</p>
            </div>

            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '24px', 
                color: 'var(--primary-color)',
                backgroundColor: '#EFF3FD',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <h3>Budget-Friendly Options</h3>
              <p>Competitive prices for quality rental cars</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h2 className="section-title">Popular Cars</h2>
          <p className="section-subtitle">
            Explore our most rented vehicles across the country
          </p>
          <CarList cars={featuredCars} />
        </div>
      </div>
    </>
  );
};

export default Home;

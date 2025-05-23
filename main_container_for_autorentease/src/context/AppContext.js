import React, { createContext, useState, useContext } from 'react';
import carsData from '../data/cars';

// Create the context
const AppContext = createContext();

// PUBLIC_INTERFACE
/**
 * AppProvider component for AutoRentEase.
 * Provides application state and functions to all child components.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AppProvider = ({ children }) => {
  // State for cars data
  const [cars, setCars] = useState(carsData);
  
  // State for search filters
  const [filters, setFilters] = useState({
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    type: '',
    sortBy: 'recommended'
  });
  
  // State for bookings
  const [bookings, setBookings] = useState([]);
  
  // Function to apply filters to car list
  const applyFilters = (filterData) => {
    setFilters({ ...filters, ...filterData });
  };
  
  // Function to get car by ID
  const getCarById = (id) => {
    return cars.find(car => car.id === parseInt(id, 10));
  };
  
  // Function to add a new booking
  const addBooking = (booking) => {
    setBookings([...bookings, { ...booking, id: bookings.length + 1 }]);
    return bookings.length + 1; // Return the new booking ID
  };
  
  // Function to get featured cars (top rated)
  const getFeaturedCars = () => {
    return cars.sort((a, b) => b.rating - a.rating).slice(0, 4);
  };
  
  // Provide the context value to all children
  const contextValue = {
    cars,
    filters,
    bookings,
    applyFilters,
    getCarById,
    addBooking,
    getFeaturedCars
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use the AppContext
 * @returns {Object} App context
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

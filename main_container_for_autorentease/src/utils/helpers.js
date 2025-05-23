/**
 * Utility functions for AutoRentEase application
 */

/**
 * Format currency amount with currency symbol
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (default: USD)
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

/**
 * Format date to localized string
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate the number of days between two dates
 * @param {Date|string} startDate - The start date
 * @param {Date|string} endDate - The end date
 * @returns {number} - Number of days
 */
export const calculateDays = (startDate, endDate) => {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Calculate rental price based on daily rate and rental period
 * @param {number} dailyRate - The daily rental rate
 * @param {number} days - Number of rental days
 * @returns {Object} - Object containing subtotal, tax, and total price
 */
export const calculateRentalPrice = (dailyRate, days) => {
  const subtotal = dailyRate * days;
  const taxRate = 0.15; // 15% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  return {
    subtotal: Math.round(subtotal),
    tax: Math.round(tax),
    total: Math.round(total)
  };
};

/**
 * Filter cars based on search criteria
 * @param {Array} cars - Array of car objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} - Filtered array of cars
 */
export const filterCars = (cars, filters) => {
  return cars.filter(car => {
    // Filter by car type
    if (filters.type && filters.type !== 'Any Type' && car.type !== filters.type) {
      return false;
    }
    
    // Filter by capacity
    if (filters.capacity && car.capacity < parseInt(filters.capacity)) {
      return false;
    }
    
    // Filter by price range
    if (filters.maxPrice && car.pricePerDay > parseInt(filters.maxPrice)) {
      return false;
    }
    
    return true;
  });
};

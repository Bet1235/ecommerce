// Changing number to EURO//
export const formatPrice = (value: number) : string =>
  new Intl.NumberFormat ('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  // rounding up percentage discount to 2 decimal//
  export const getDiscountedPrice = (price: number, discountPercentage: number): number => {
    const discounted = price - (price * discountPercentage)/ 100;
    return Math.round(discounted * 100)/100;
  };



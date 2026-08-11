// Changing number to EURO//
export const formatPrice = (value: number) : string =>
  new Intl.NumberFormat ('en-EURO', {
    style: 'currency',
    currency: 'EURO',
  }).format(value);

  // rounding up percentage discount to 2 decimal//
  export const getDiscountedPrice = (price: number, discountPercentage: number): number => {
    const discounted = price - (price * discountPercentage)/ 100;
    return Math.round(discounted * 100)/100;
  };



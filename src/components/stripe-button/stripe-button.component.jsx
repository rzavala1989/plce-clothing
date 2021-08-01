import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JJDyZAjRZkrCM5GgBrAu3TVueW2pj11mw3MuHFnMXSKEntdT8NrKIlqTJ9PC6sRV3eYSLkhRY1chhFDOOWQJJCY003RgxJO66';

  const onToken = (token) => {
    console.log(token);
    alert('Your payment was successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='PLCE Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JJDyZAjRZkrCM5GgBrAu3TVueW2pj11mw3MuHFnMXSKEntdT8NrKIlqTJ9PC6sRV3eYSLkhRY1chhFDOOWQJJCY003RgxJO66';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment authorized! Thank you for shopping at PLCE!');
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert('There was an issue with your payment! Please make sure you use the provided credit card.');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
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

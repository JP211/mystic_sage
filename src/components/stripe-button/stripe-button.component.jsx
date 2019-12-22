import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ZiHItGd4AYaeVDofci5fHsHs00jzca79lx';

const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout
      label= 'Pay Now'
      name='Mystic Sage Co.'
      billingAddress
      shippingAddress
      image='https://i.imgur.com/BHs09I5.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

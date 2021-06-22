import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J56N9SC2vFMVFF22SZjBwZYSGHq2Y8smO7aRKmjolMdjoaRJrk1MV8wp01q4UQHenf4WqxoS8nJkHIgqtlrX92q00FQawb0r0';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
        lable= 'Pay Now'
         name='ADTA Clothing'
         billingAddress
         shippingAddress
         image = 'https://svgshare.com/i/CUz.svg'
         description = {`Your total is $${price}`}
         amount = {priceForStripe}
         panelLabel = 'PayNow'
         token = {onToken}
         stripeKey = {publishableKey}
          />
    )
}

export default StripeCheckoutButton
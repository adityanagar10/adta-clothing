import React from 'react';
import {connect} from 'react-redux';
import CheckOutItem from '../../components/checkout-item/checkout-item.components';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import './checkout.styles.scss';

const CheckOutPage= ({cartItems, total})=> (
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header'>
        <span> Product </span>
        </div>

        <div className='header'>
        <span> Description </span>
        </div>

        <div className='header'>
        <span> Quantity </span>
        </div>

        <div className='header'>
        <span> Price </span>
        </div>

        <div className='header'>
        <span> Remove </span>
        </div>
        </div>

        {
            cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className = 'total' >
            <span>TOTAL: ${total} </span>
        </div>
        <div className = "test-warning">
        * Please Use the following test credit card for paymets : <br />  4242 4242 4242 4242 - Exp : 01/23 - CVV: 123
        </div>
        <StripeCheckoutButton price = {total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
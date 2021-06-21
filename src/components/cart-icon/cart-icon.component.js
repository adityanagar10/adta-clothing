import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import { selectCartItemCount} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './cart-icon.styles.scss'
import cartItem from '../cart-item/cart-item.component';


const CartIcon = ({toggleCartHidden, itemCount}) =>{
    return(
        <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count' > {itemCount} </span>
    </div>

    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden)
})

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
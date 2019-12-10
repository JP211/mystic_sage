import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import ShoppingIcon from '../../assets/shoppingIcon.png';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
<div className = 'cart-icon' onClick={toggleCartHidden}>
<div className='shopping-icon'>
  <img src={ ShoppingIcon } alt='Shopping icon' />
</div>
  <span className='item-count'>{itemCount}</span>
</div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(null, mapDispatchToProps)(CartIcon);

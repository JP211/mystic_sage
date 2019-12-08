import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import ShoppingIcon from '../../assets/shoppingIcon.png';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
<div className = 'cart-icon' onClick={toggleCartHidden}>
<div className='shopping-icon'>
  <img src={ ShoppingIcon } alt='Shopping icon' />
</div>
  <span className='item-count'>0</span>
</div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

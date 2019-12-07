import React from 'react';

import ShoppingIcon from '../../assets/shoppingIcon.png';

import './cart-icon.styles.scss';

const CartIcon = () => (
<div className = 'cart-icon'>
<div className='shopping-icon'>
  <img src={ ShoppingIcon } alt='Shopping icon' />
</div>
  <span className='item-count'>0</span>
</div>
)

export default CartIcon;

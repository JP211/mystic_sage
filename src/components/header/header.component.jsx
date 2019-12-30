import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import logo from '../../assets/MysticSage_logo_black.png';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img src={logo} className='logo' alt='logo'/>
    </LogoContainer>
      <OptionsContainer>
          <OptionLink to='/shop'>
          SHOP
          </OptionLink>
          <OptionLink to='/shop'>
          CONTACT
          </OptionLink>

          {
            currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>
              SIGN OUT
              </OptionDiv>
          )  : (
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
          )}
            <CartIcon />
      </OptionsContainer>
          {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

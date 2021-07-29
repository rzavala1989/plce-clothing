import React from 'react';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon'>
    <ShoppingIcon onClick={toggleCartHidden} className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);

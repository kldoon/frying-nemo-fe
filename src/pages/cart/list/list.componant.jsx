import React from 'react';
import CartRow from '../row/row.componant';

const CartList = (props) => {
  return (
    props.cart.length
      ? <ul className="cart-list">
        {
          props.cart.map((cartItem, index) => <CartRow cartItem={cartItem} dispatch={props.dispatch} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="./angry.png" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;

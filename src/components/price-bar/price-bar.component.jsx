import React, { useContext } from 'react';
import { CartContext } from '../providers/cart-provider';
import './price-bar.css';

const PriceBar = (props) => {

  const cartContext = useContext(CartContext);

  const handleIncrement = () => {
    cartContext.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
  };

  const handleDecrement = () => {
    cartContext.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
  };

  return (
    <div className='card-footer'>
      <h4 className='item-price'>{props.item.price} $</h4>
      <div className='card-buttons'>
        <button className='card-button' onClick={handleDecrement}>-</button>
        <span className='item-quantity'>{props.itemQuantity}</span>
        <button className='card-button' onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default PriceBar;
import React, { useContext } from 'react';
import trashIcon from '../../../assets/trash.svg';
import { CartContext } from '../../core/providers/cart-provider.component';
import { DataContext } from '../../core/providers/data-provider.component';

const CartRow = ({ cartItem }) => {
  const { dispatch } = useContext(CartContext);
  const { isToggled } = useContext(DataContext);
  const { item, quantity } = cartItem;
  const incrementItem = () => dispatch({ type: `INCREMENT`, item });
  const decrementItem = () => dispatch({ type: `DECREMENT`, item });
  const deleteItem = () => dispatch({ type: `DELETE`, item });
  const touristMultiplier = (isToggled ? 2 : 1);
  return (
    <li className="cart-row">
      <img src={item.image} alt="item" />
      <div className="main-info">
        <h2>{item.name}</h2>
        <span className="item-price">
          ${item.price * touristMultiplier}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={incrementItem}>&#43;</button>
          {quantity}
          <button onClick={decrementItem}>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${item.price * quantity * touristMultiplier}</h3>
        <button onClick={deleteItem}>
          <img src={trashIcon} alt="delete" />Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

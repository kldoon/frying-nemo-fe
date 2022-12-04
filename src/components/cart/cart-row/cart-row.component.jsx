import PlusMinusButtons from '../../plus-minus-buttons/plus-minus-buttons.component';
import trash from '../../../images/trash.png';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';
import './cart-row.css';

const CartRow = (props) => {
    const cartContext = useContext(CartContext);
    const deleteItem = () => {
        cartContext.dispatch({ type: 'DELETE_CART_ITEM', meal: props.item.meal });
    };
    return (
        <li className='cart-row'>
            <div className="left">
                <img src={props.item.meal.image} width={170} height={200} alt="" />
            </div>
            <div className="center">
                <h2>{props.item.meal.name}</h2>
                <p>${props.item.meal.price}&nbsp;&nbsp;<span className='green-text'>In Stock</span></p>
                <PlusMinusButtons item={props.item.meal} quantity={props.item.quantity} />
                {/* i should later get this div out and style it */}
            </div>
            <div className='right'>
                <p className='price'>Price: <b>${props.item.meal.price * props.item.quantity}</b></p>
                <button className='trash' onClick={deleteItem}>
                    <img src={trash} width={25} alt="" />
                </button >
            </div>
        </li>
    );
};

export default CartRow;
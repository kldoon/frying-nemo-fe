import { useState } from 'react';
import './item-card.css';

/**
 * 
 * @param {}
 */

const subtractOne = (oldVal) => {
    return (oldVal > 0)? (oldVal - 1) : oldVal;

}
const ItemCard = (props) => {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='item-card'>
            <div className="card-wrapper">
                <img src={props.img} width={250} height={200} alt="pizza"/>
                <div className="item-description">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="buy-item">
                    <div className="price">
                        <h3>${props.price}</h3>
                    </div>
                    <div className="item-quantity">
                        <button
                            className='nemo-button'
                            onClick={() => setQuantity(oldVal => oldVal + 1)}
                        >
                            <b>+</b>
                        </button>
                        <span className='quant'>{quantity}</span>
                        <button
                            className='nemo-button'
                            onClick={() => setQuantity((oldVal) => subtractOne(oldVal))}>
                            <b>-</b>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemCard;
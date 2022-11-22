import { useState, useEffect } from 'react';
import './item.css';
import { useNavigate, useParams } from 'react-router-dom';
import Items from '../item/item.component';
import {getItem }from '../../../data/items';
import "../../header/header.css";
import { getCartQuantity } from '../../../utilit/cart';
import Price from '../filture/price-par/price-par';
import { CartContext } from '../../../components/provider/cart-provider.component';
import { useContext } from 'react';


/**
 * @type {Array<{
 * id:number;
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */

const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    setLoading(true);
   const item =getItem(params.id);
   if (item === null) {
    navigate('/404')
   }
      setCurrentItem(item);
      setLoading(false);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading }
      {
        !loading && currentItem !== null
          ? <div className="item-details">
            <h1>{currentItem.name}</h1>
            <div className="img">
              <img src={currentItem.image} alt="food" />
            </div>
            <div className="info">
              <p><b>Item Description: </b> {currentItem.description}</p>
              <p className="ingredients"><b>Ingredients:</b>
                <br />{currentItem.ingredients.join(", ")}</p>
            </div>
            <Price
              item={currentItem}
              dispatch={props.dispatch}
              cartQuantity={getCartQuantity(currentItem.id, cartContext.cart)}
            />
          </div>

          : null
      }
    </div>
  );
};

export default ViewItemPage;

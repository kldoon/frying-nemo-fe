import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './view-item.css';
import { getItem } from '../../services/items';
import Spinner from '../../components/core/spinner/spinner.component';
import PriceBar from '../../components/view/price-bar/price-bar.component';
import { getCartQuantity } from '../../utils/cart';

const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    if (item === null) {
      navigate("/404", { replace: true });
    }
    setCurrentItem(item);
    setLoading(false);
  }, []);

  return (
    <div className="view-item-page">
      {loading
        ? <Spinner />
        : <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.image} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
          <PriceBar
            item={currentItem}
            dispatch={props.dispatch}
            cartQuantity={getCartQuantity(currentItem.id, props.cart)}
          />
        </div>
      }
    </div>
  );
};

export default ViewItemPage;
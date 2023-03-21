import ItemCard from '../../components/view/item-card/item-card.component';
import FilterBar from '../../components/view/filter-bar/filter-input.component';
import './view.css';
import { useContext } from 'react';
import { getItemQuantity } from '../../utilities/get-item-quantity';
import { CartContext } from '../../components/providers/cart-provider';
import Spinner from '../../components/core/spinner/spinner';
import useGetItems from '../../hooks/get-item.hook';

/**
 * @type {Array<{
 * id: number;
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string; 
 * }>}
 */


/**
 * 
 * @param {{cart: []; 
 * dispatch: React.DispatchWithoutAction;
 * }} props 
 * @returns 
 */
const View = () => {
  const cartContext = useContext(CartContext);
  const { loading, menuItems } = useGetItems();

  return (
    <div className="view-page">
      <h1>All Menu Items</h1>

      <FilterBar />
      {
        loading ? <Spinner /> :
          <>
            <div className='items-container'>
              {
                menuItems.map(
                  (item, index) => {
                    return (
                      <ItemCard
                        item={item}
                        key={item + index}
                        dispatch={cartContext.dispatch}
                        itemQuantity={getItemQuantity(cartContext.cart, item.id)}
                      />
                    );
                  })
              }
            </div>
          </>
      }

    </div>
  );
};

export default View;
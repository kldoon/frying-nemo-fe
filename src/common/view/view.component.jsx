import './view.css';
import Items from '../view/item/item.component';
import React, { useContext } from "react";
import FilterBar from './filture/filter-bar.companent';
import { getCartQuantity } from '../../utilit/cart';
import { CartContext } from '../../components/provider/cart-provider.component';
import useGetItem from '../../hook/menu/get-items.hook';
import { Spinner } from 'phosphor-react';

const ViewPage = () => {

  const { menuItems, loading } = useGetItem();
  const cartContext = useContext(CartContext);


  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar />
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="item">
              {
                menuItems.length
                  ? menuItems.map((item, index) => (
                    <Items
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />
                  ))
                  : (
                    <div className="no-results">
                      <img src="./frustrated-realistic.png" alt="No results" />
                      <p>No results found</p>
                    </div>
                  )
              }
            </div>
          )
      }
    </div>
  );
};

export default ViewPage;

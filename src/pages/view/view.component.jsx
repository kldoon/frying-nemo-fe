import { useState } from 'react';
import Item from '../../components/menu-item/menu-item.component';
import './view.css';
import { useEffect } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterBar from '../../components/filter-bar/filter-bar.component';
import { UserContext } from '../../components/providers/provider.component';
import { useContext } from 'react';
import { getCartQuantity } from '../../components/header/cart';
import { CartContext } from '../../components/providers/cart-provider.component';
import { getItems } from '../view-item/item';
import useFilteredItems from '../../components/hooks/items.hook';
import useToggle from '../../components/hooks/toggle.hook';


/**
 * @type {Array<{
 *  * id: number;
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const getMenuItems = () => JSON.parse(localStorage.menuItem || '[]');

const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const search = params.get('search') || '';
  const categoriesFromURL = params.getAll('category') || '';
  const navigate = useNavigate();
  const minPrice = params.get('Min') || '';
  const maxPrice = params.get('Max') || '';
  const [isTourist, toggleIsTourist] = useToggle(false);


  console.log('search params = ', search);

  const getMenuItems = async () => {
    setLoading(true);
    const items = await getItems();
    // setTimeout(() => {
    //   const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItems(items);
      setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = useFilteredItems(menuItems);

  // /**
  // * Set query string parameter.
  // * @param {string} name Parameter name.
  // * @param {string | string[]} value Parameter value.
  // */
  // const setParam = (name, value) => {
  //   const newParams = new URLSearchParams(params);

  //   newParams.delete(name);

  //   if (Array.isArray(value)) {
  //     value.forEach(item => newParams.append(name, item));
  //   } else if (value.trim()) {
  //     newParams.set(name, value.trim());
  //   }

  //   setParams(newParams);
  // };


  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar isTourist={isTourist} toggleIsTourist={toggleIsTourist}/>
      <br />

      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {filteredItems.length === 0
            ?
            <div >
              <img className='NFimg' alt='' src="https://media.istockphoto.com/vectors/upset-magnifying-glass-vector-illustration-vector-id1038232966?k=20&m=1038232966&s=612x612&w=0&h=32LDIxPK4zbWwukV_b1JTlzdkiLgZPPFPNNBQfvSrGU=" />
              <h2 className='NFtext'>No Menue Items Found!</h2></div>
            : filteredItems.map((item, index) => <Item 
            data={item}
              key={item.name + index} 
              dispatch={cartContext.dispatch}
              cartQuantity={getCartQuantity(item.id, cartContext.cart)} />)
          }
        </div>
      }


    </div>

  );
};

export default ViewPage;
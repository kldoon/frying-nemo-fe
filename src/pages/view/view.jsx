import Card from './card';
import './view.css';
import React, { useState, useContext } from 'react';
// import Input from '../../components/common/input/input';
import './view.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FilterBar } from './filter-bar/filter-bar';
import { CATEGORIES } from '../../data/data';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import { CartContext } from '../../components/providers/cart-provider';
import { getItemsFromAPI } from '../../components/services/items';
/**
   * @type {Array<
   * 
   * {
   * id :number
   * name: string;description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;}>}
   */
const ViewPage = (props) => {
  const initial = [];
  const [menuitems, setMenuItems] = useState(initial);

  const getItems = async () => {
    const items = await getItemsFromAPI();
    setMenuItems(items);
  };

  const cartContext = useContext(CartContext);
  // const GetmenuItems = () => JSON.parse(localStorage.menuitems || '[]');
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  //instance of class 
  const [search, setSearch] = useState('');
  /***  القيم الي يتجي بعد علامة الاستفهانم   */
  const [params, setParams] = useSearchParams();
  //my query 
  const searchFromURL = params.get("searchTerms") || '';
  const categoriesFromURL = params.getAll("categories") || '';
  const categoriesURL = params.get("categoriess") || '';
  const maxFromURL = params.get("max") || '';
  const minFromURL = params.get("min") || '';
  const price = params.get("price") || '';
  // const [price,setPrice] =useState(10)

  /**
         * Check if search terms are somewhere inside given string.
          @param {string} value 
         */
  // const setSearchInLocalStorage = (value) => {
  //   localStorage.setItem("search-Terms ", value);
  //   setSearch(value);
  // };

  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }

    getItems();
  }, []);

  const filterItems = menuitems.filter(item => {

    /**
         * Check if search terms are somewhere inside given string.
         * @param {string} str 
         */

    ///update the value in isMatch method to search from search query in the URL  //easy user experience 
    const isMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());
    let match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingrediant.some(ingredient => isMatch(ingredient))

    );

    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.categories));
    }

    if (categoriesURL) {
      match = match && (item.categories === categoriesURL);
    }


    if (maxFromURL && minFromURL) {
      match = match && (item.price >= minFromURL && item.price <= maxFromURL);

    }
    if (price) {
      match = match && (item.price >= price);
    }

    return match;

    // item.name.toLowerCase().includes(search.toLowerCase().trim())
  });


  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };


  const getCartQuantity = (id, cart) => {
    const currentCartItme = cart.find(CartItem => CartItem.meal.id === id);
    if (currentCartItme)
      return currentCartItme.quantity;
    else
      return 0;
  };
  return (

    <div className='wrapper' >
      <h1>View items page</h1>


      <div className="filter">
        <FilterBar
          searchTerms={searchFromURL}
          categories={categoriesFromURL}
          setParam={setParam}
        />
      </div>

      <div className="container" >

        {
          filterItems.length
            ?
            (filterItems.map((item, index) =>
              <Card data={item}
                key={item.name + index}
                dispatch={cartContext.dispatch}
                // cartQuantity={props.cart}
                cartQuantity={getCartQuantity(item.id, cartContext.cart)}
              />
            ))
            : (
              <div className="no-results">
                {/* <img src="./frustrated-realistic.png" alt="No results" /> */}
                <p>No results found</p>
              </div>
            )
        }

      </div>

    </div>
  );
};

export default ViewPage;
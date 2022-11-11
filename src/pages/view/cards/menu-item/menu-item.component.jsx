import React from 'react' ;
import { Link } from 'react-router-dom';
import './menu-item.css' ;
/**
 * 
 * @param {
 * id : number;
 * name : string ;
 * price : number ;
 * discription : string ;
 * catigory : string ;
 * image : string ;
 * ingredients : string[] ;
 * } props 
 * @returns 
 */
const MenuItem = (props) => {
  //const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  return (
    <div className='item-card'>
      <div className='img'><img src={props.item.image} alt="" /></div>
       <h2> <Link to = {`/view-details/${props.item.id}`}>{props.item.name}</Link></h2> 
      <div className="info">
        <span>Its a : {props.item.catigory}</span>
        <p> {props.item.discription}</p>
        <p className="ingredients"> {props.item.ingredients.join(", ")}</p>
      </div>
      <div className='price'>
        <span >{props.item.price} $</span>
        <div className='add-cart'> 
          <button> - </button>
          <input type="number" className='ordersCount' />
          <button> + </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem ;
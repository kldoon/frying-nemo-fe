import './item.css';
import {Link} from "react-router-dom"
import Singleitem from '../../../pages/singleitempage/Singleitem';
/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     data:{
 *     name: string;
 *     image: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *    }
 *   }} props
 */
const Item = (props) => {
  return (
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <h2 onClick={()=>{<Singleitem names={"sada"}></Singleitem>}}><Link to={`/view/${10}`}>{props.data.name}</Link></h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(", ")}</p>
        {/* instead of join you can use // map((ing, i) => ing + (i < props.data.ingredients.length - 1 ? ', ' : ' ')) */}
      </div>
      <div className="price">
        <span>{props.data.price}$</span>
        <div className="add-cart">
          <button>+</button>
          <input type="number" max={500} />
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

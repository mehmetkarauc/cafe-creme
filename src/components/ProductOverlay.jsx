import React from 'react';
import ItemImage from '../images/Food1.png';
import { RxCrossCircled } from 'react-icons/rx';

function ProductOverlay(props) {
    console.log(props.item);

  return (
    <div id='popup'>
        <img src={ItemImage} alt="item"/>
        <RxCrossCircled id='closeButton' onClick={props.onItemClick}/>
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.description}</p>
            <div>
                <p>Questions about allergies, ingredients or cooking methods, please contact the restaurant.</p>
            </div>
            {/* <div>
                <button>Add for £{props.item.price}</button>
            </div> */}
        </div>
    </div>
  )
}

export default ProductOverlay;
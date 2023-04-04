import React from 'react';
import ItemImage from '../images/Food1.png';
import { RxCrossCircled } from 'react-icons/rx';
import PropTypes from 'prop-types';

function ProductOverlay(props) {

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
            <button id='addButton'>Add for £{props.item.price}</button>
        </div>
    </div>
  )
}

ProductOverlay.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
  }).isRequired,
};

export default ProductOverlay;
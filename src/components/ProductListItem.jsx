import React, { useState } from 'react';
import ImageItem from '../images/Food1.png';
import ProductOverlay from './ProductOverlay.jsx';
import PropTypes from 'prop-types';

function ProductListItem(props) {
    const [showPopup, setShowPopup] = useState(false);

    function onItemClick() {
        setShowPopup(!showPopup);
    }

    return (
        <>
            <div id="productListItem" onClick={onItemClick}>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>{props.item.name}</p>
                                    <p>{props.item.description}</p>
                                    <p>£{props.item.price}</p>
                                </div>
                                <div>
                                    <img src={ImageItem} alt="item"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup ? <ProductOverlay item={props.item} onItemClick={onItemClick}/> : null}
        </>
    )
}

ProductListItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    }).isRequired,
  };

export default ProductListItem;

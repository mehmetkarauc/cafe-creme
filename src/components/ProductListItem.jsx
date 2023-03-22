import React from 'react';
import ImageItem from '../images/Food1.png';

function ProductListItem(props) {
    return (
        <div id="productListItem">
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
    )
}

export default ProductListItem;

import React, { useState } from 'react';
import Basket from './Basket.jsx';
import MenuSectionsTitle from './MenuSectionsTitle.jsx';
import ProductListItem from './ProductListItem.jsx';
import PropTypes from 'prop-types';

function ProductList(props) {
  const [data, setData] = useState(props.data);

  // const titles = Object.keys(data).map((section, index) => <p key={index}>{section}</p>);

  // const sectionItems = Object.keys(data).map((section, index) => <p id="section" key={index}>{section}</p>)

  return (
    <div className="productList">
      <div>
        <div>
          <div>
            <button>View Basket</button>
          </div>
          { Object.keys(data).map((section, index) => 
            <div id="section">
              <MenuSectionsTitle index={index} text={ section }/>
              <div id="sectionRow">
                {data[section].map((item, itemIndex) => (
                  <ProductListItem key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    </div>
  )
}

ProductList.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductList;
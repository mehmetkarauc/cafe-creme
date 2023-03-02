import React from 'react';

function SmallImage(props) {
  return (
    <div id="imageStyle">
        <img src={ props.url } className="img-fluid" alt={ props.alt }/>
    </div>
  )
}

export default SmallImage;
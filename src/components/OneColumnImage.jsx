import React from 'react';

function OneColumnImage(props) {
  return (
    <div className='cropped'>
        <img src={ props.url } alt={ props.alt }/>
    </div>
  )
}

export default OneColumnImage;
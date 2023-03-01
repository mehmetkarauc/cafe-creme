import React from 'react';
import HomeBackgroundImage from '../images/Breakfast.png';

function OneColumnImage() {
  return (
    <div className='cropped'>
        <img src={ HomeBackgroundImage } alt="Home Background"/>
    </div>
  )
}

export default OneColumnImage;
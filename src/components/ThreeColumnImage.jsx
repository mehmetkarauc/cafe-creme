import React from 'react';

function ThreeColumnImage(props) {
  return (
    <div className='threeColumnImageStyle'>
        <img src={ props.url1 } alt={ props.alt }/>
        <img src={ props.url2 } alt={ props.alt }/>
        <img src={ props.url3 } alt={ props.alt }/>
    </div>
  )
}

export default ThreeColumnImage;
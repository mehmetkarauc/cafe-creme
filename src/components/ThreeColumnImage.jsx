import React from 'react';

function ThreeColumnImage(props) {
  return (
    <div id="threeColumnImage" className='threeColumnImageStyle'>
      <div>
        <img src={ props.url1 } alt={ props.alt }/>
        <img src={ props.url2 } alt={ props.alt }/>
        <img src={ props.url3 } alt={ props.alt }/>
      </div>
    </div>
  )
}

export default ThreeColumnImage;
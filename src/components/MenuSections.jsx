import React from 'react';
// import Background from '../images/Background1.png';

function MenuSections(props) {
  return (
    <div id='menuSections'>
      {/* <img src={ Background } alt="Background"/>  */}
        <div id='sectionList'>
          <p> { props.text1 } </p>
          <p> { props.text2 } </p>
          <p> { props.text3 } </p>
        </div>
        <p id='download'> { props.text4 } </p>
    </div>
  )
}

export default MenuSections;
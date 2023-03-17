import React from 'react';
import MenuSections from '../components/MenuSections.jsx';

const section1 = 'Breakfast';
const section2 = 'Lunch';
const section3 = 'Dinner';
const download = 'Download Menu';

function Menu() {
  return (
    <>
      <MenuSections text1={ section1 } text2={ section2 } text3={ section3 } text4={ download }/>
    </>
  )
}

export default Menu;
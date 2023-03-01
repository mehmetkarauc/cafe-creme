import React from 'react';
import Caption from '../components/Caption.jsx';
import OneColumnImage from '../components/OneColumnImage.jsx';
import ThreeColumnImage from '../components/ThreeColumnImage.jsx';
import OneColumnContent from '../components/OneColumnContent.jsx';
import Title from '../components/Title.jsx';
import HomeBackground from '../images/Breakfast.png';
import ThreeColumnImage1 from '../images/Food1.png';
import ThreeColumnImage2 from '../images/Food2.png';
import ThreeColumnImage3 from '../images/Food3.png';

const title = "Cafe Creme";
const caption = "We Love Food";
const oneColumnContent = "Welcome to Cafe Creme, a lovely, family run cafe on Roman Road in Bow, serving a wonderful selection of homemade Cakes, Pancakes, Beakfasts, Roast Dinners and more. Where better to be than on our terrace, whilst sipping away at a steaming Cappuccino, or eating a delicious Chicken Breast Burger. Our experienced chef ensures that the food is as welcoming as the cafe. He selects the best, fresh ingredients for every breakfast, dinner and sweet treat that's on our menu, and makes everything fresh to order.";

function Home() {
  return (
    <div>
      <OneColumnImage url={ HomeBackground } alt="Home Background"/> 
      <Title text={ title }/>
      <Caption text={ caption }/>
      <OneColumnContent text={ oneColumnContent }/>
      <ThreeColumnImage url1={ ThreeColumnImage1 } url2={ ThreeColumnImage2 } url3={ ThreeColumnImage3 } alt="Three Column Image"/>
    </div>
  )
}

export default Home;
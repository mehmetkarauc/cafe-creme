import React from 'react';
import Caption from './Caption';
// import OneColumnContent from './OneColumnContent';

const caption1 = "Food Made with Love";
const caption2 = "Diversity";
const caption3 = "Woman Empowerment";
const content1 = "Cafe Creme is a health-conscious cafe, meaning that we try to ensure that every dish is made with the healthiest and organic ingredients.\nWe are free from artificial flavours and colouring.\nWe have dishes that are vegan and vegetarian.\nOur drinks have alternative milk options.\nWe believe in making something for everyone.";
const content2 = "We have a team of diverse people.\nOur team shapes our brand, and we welcome people from everywhere - no matter where you're from, your gender, your beliefs, everyone is welcome.\nInclusivity is key.";
const content3 = "Cafe Creme is proud to have a wonderful team of women and men individuals.\nWomen empowerment is important to us and we have a growing team of women at Cafe Creme.\nCafe Creme strongly stands with the United Nations Sustainability Goal 5:\nAchieve gender equality and empower all woman and girls.";

function Values() {
    const contentArray1 = content1.split('\n');
    const contentArray2 = content2.split('\n');
    const contentArray3 = content3.split('\n');

  return (
    <div id="values">
        <div id="value">
            <Caption text={ caption1 }/>
            {/* <OneColumnContent text={ content } /> */}
            {contentArray1.map(sentence => <p key={sentence}>{sentence}</p>)}
        </div>
        <div id="value">
            <Caption text={ caption2 }/>
            {/* <OneColumnContent text={ content } /> */}
            {contentArray2.map(sentence => <p key={sentence}>{sentence}</p>)}
        </div>
        <div id="value">
            <Caption text={ caption3 }/>
            {/* <OneColumnContent text={ content } /> */}
            {contentArray3.map(sentence => <p key={sentence}>{sentence}</p>)}
        </div>
    </div>
  )
}

export default Values;
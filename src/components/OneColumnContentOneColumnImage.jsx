import React from 'react';
import Caption from './Caption.jsx';
import OneColumnContent from './OneColumnContent.jsx';
import Image from './Image.jsx';
import ColumnImage from '../images/Family2.png';

const caption = "With Passion, Good Food!";
const content = "Cafe Creme is family run cafe, based in the heart of Roman Road. Cafe Creme was first opened in 1st May 2011 and has been serving the best selection of breakfasts all the way to dinners ever since. We serve a wonderful selection of breakfasts and homemade specials daily.";

function OneColumnContentOneColumnImage() {
  return (
    <div id="oneColumnContentOneColumnImage" className='oneColumnContentOneColumnImageStyle'>
        <div>
            <div>
                <Caption text={ caption }/>
                <OneColumnContent text={ content }/>
            </div>
            <div>
                <Image url={ ColumnImage } alt="Small Image"/>
            </div>
        </div>
    </div>
  )
}

export default OneColumnContentOneColumnImage;
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const style = { height: '40px', width: '40px', margin: '0px 15px' };
const style2 = { height: '33px', width: '33px', margin: '0px 15px' };

function Footer() {
  return (
    <footer id='footer'>
        <div id='content'>
            <div id='icons'>
                <a href="https://www.instagram.com/cafecremebow/?hl=en" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram style = { style }/></a>
                <a href="https://www.facebook.com/cafecremebow/" target="_blank" rel="noopener noreferrer"><BsFacebook href="" style = { style2 }/></a>
                <a href="https://twitter.com/cafecremebow" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter href="" style = { style }/></a>
                </div>
            <div id='copyrights'>
                <p> © Cafe Creme 2023. All Rights Reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
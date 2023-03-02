import React from 'react';
import OneColumnContentOneColumnImage from '../components/OneColumnContentOneColumnImage.jsx';
import Title from '../components/Title.jsx';

const title = "About Us";

function About() {
  return (
    <div>
      <Title text={ title }/>
      <OneColumnContentOneColumnImage />
    </div>
  )
}

export default About;
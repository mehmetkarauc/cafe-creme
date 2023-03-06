import React from 'react';
import OneColumnContent from '../components/OneColumnContent.jsx';
import OneColumnContentOneColumnImage from '../components/OneColumnContentOneColumnImage.jsx';
import Title from '../components/Title.jsx';
import Values from '../components/Values.jsx';

const title = "About Us";
const title2 = "Our Values";
const content = "Our values define our beliefs and principles that guide our behaviour and actions. They reflect what we stand for, what’s important to us and how we intend to operate.";

function About() {
  return (
    <>
      <Title text={ title }/>
      <OneColumnContentOneColumnImage />
      <Title text={ title2 }/>
      <OneColumnContent text={ content }/>
      <Values />
    </>
  )
}

export default About;
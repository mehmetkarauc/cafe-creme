import React from 'react';

function Title(props) {
  return (
    <p id="title" className="titleStyle"> - { props.text } - </p>
  )
}

export default Title;
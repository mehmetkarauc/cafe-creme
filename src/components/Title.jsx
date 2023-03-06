import React from 'react';

function Title(props) {
  return (
    <div id="title">
      <p className="titleStyle"> - { props.text } - </p>
    </div>
  )
}

export default Title;
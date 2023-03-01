import React from 'react';

function Caption(props) {
  return (
    <div>
        <p className="captionStyle"> { props.text } </p>
    </div>
  )
}

export default Caption;
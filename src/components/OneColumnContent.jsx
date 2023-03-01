import React from 'react';

function OneColumnContent(props) {
  return (
    <div>
        <p className="oneColumnContentStyle"> { props.text } </p>
    </div>
  )
}

export default OneColumnContent;
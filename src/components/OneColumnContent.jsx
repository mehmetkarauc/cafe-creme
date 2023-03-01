import React from 'react';

function OneColumnContent(props) {
  return (
    <div id="oneColumnContent">
        <p className="oneColumnContentStyle"> { props.text } </p>
    </div>
  )
}

export default OneColumnContent;
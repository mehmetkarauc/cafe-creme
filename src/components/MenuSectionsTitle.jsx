import React from 'react';

function MenuSectionsTitle(props) {
  return (
    <>
        <div key={props.index} id='sectionTitle'>{props.text}</div>
        {console.log(props.index)}
    </>
  )
}

export default MenuSectionsTitle;
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductNavbar(props) {
    const [data, setData] = useState(props.data);
    const [dropdownList, setDropdownList] = useState([]);
    const [navSections, setNavSections] = useState([]);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // const sections = Object.keys(data).map((section, index) => <p activeClassName="active" key={index}>{section}</p>);

    const sections = Object.keys(data).map((section, index) => <NavLink id="section" key={index}>{section}</NavLink>);

    const sections2 = Object.keys(data).map((section, index) => <option key={index}>{section}</option>);

    // useEffect(() => {
    //     if () {
            
    //     }
    // }, [width, height]);

  return (
    <div className="productNavbar">
        <nav id="navbox">
            <ul id="navItems">
                {sections}
                <select>
                    {sections2}
                </select>
            </ul>
        </nav>
    </div>
  )
}

ProductNavbar.propTypes = {
    data: PropTypes.object.isRequired
  };

export default ProductNavbar;
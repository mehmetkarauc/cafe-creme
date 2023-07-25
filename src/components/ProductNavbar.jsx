import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductNavbar(props) {
    const [data, setData] = useState(props.data);
    const [navSection, setNavSection] = useState(Object.keys(data));
    const [dropdownList, setDropdownList] = useState(Object.keys(data).filter(section => !navSection.includes(section)));
    const [previousWindowWidth, setPreviousWindowWidth] = useState(window.innerWidth);
    const [newWindowWidth, setNewWindowWidth] = useState();
    const [direction, setDirection] = useState('');
    let previousItem = '';

    useEffect(() => {
      const handleResize = () => {
        setNewWindowWidth(window.innerWidth);
        // setDirection(newWindowWidth > previousWindowWidth ? 'increasing' : 'decreasing');
        setPreviousWindowWidth(newWindowWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [previousWindowWidth]);    

    useEffect(() => {
      let navItemsWidth = document.getElementById("navItems").offsetWidth;
      let navItemsScrollWidth = document.getElementById("navItems").scrollWidth;
      let lastItem = navSection[navSection.length - 1];
      
      if (navSection && navItemsScrollWidth >= navItemsWidth) {
        setNavSection(navSection.slice(0, -1));
        if (lastItem !== previousItem) {
          setDropdownList((dropdownList) => [lastItem, ...dropdownList]);
          previousItem = lastItem;
        }
      } else if (navSection && dropdownList && previousWindowWidth < newWindowWidth) {        
        let addingSection = dropdownList.shift();
        if (navItemsScrollWidth < navItemsWidth && addingSection !== lastItem) {
          setNavSection((navSection) => [
            ...navSection, addingSection
          ]);
        }
      }
    });

  return (
    <div className="productNavbar">
      <nav id="navbox">
        <ul id="navItems">
            {navSection.length > 0 && navSection.map((section, index) => <NavLink id="section" key={index}>{section}</NavLink>)}
          <select>
            {dropdownList.length > 0 && dropdownList.map((section, index) => <option key={index}>{section}</option>)}
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
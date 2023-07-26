import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductNavbar(props) {
    const [data, setData] = useState(props.data);
    const [navSection, setNavSection] = useState(Object.keys(data));
    const [dropdownList, setDropdownList] = useState(Object.keys(data).filter(section => !navSection.includes(section)));
    const [newWindowWidth, setNewWindowWidth] = useState();
    let previousItem = '';

    const navItemsRef = useRef(null);
    const previousWindowWidth = useRef(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setNewWindowWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [newWindowWidth]);    

    useEffect(() => {
      navItemsRef.current = document.getElementById('navItems');
    }, []);

    useEffect(() => {
      if (navItemsRef.current) {
        let navItemsWidth = navItemsRef.current.offsetWidth;
        let navItemsScrollWidth = navItemsRef.current.scrollWidth;
        let lastItem = navSection[navSection.length - 1];

        if (navSection.length > 0 && navItemsScrollWidth >= navItemsWidth) {
          setNavSection(navSection.slice(0, -1));
          if (lastItem !== previousItem) {
            setDropdownList((dropdownList) => [lastItem, ...dropdownList]);
            previousItem = lastItem;
          }
        } else if (navSection.length > 0 && dropdownList.length > 0 && previousWindowWidth.current < window.innerWidth) {
          let addingSection = dropdownList.shift();
          if (navItemsScrollWidth < navItemsWidth && addingSection !== lastItem) {
            setNavSection((navSection) => [...navSection, addingSection]);
          }
        }
        previousWindowWidth.current = window.innerWidth;
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

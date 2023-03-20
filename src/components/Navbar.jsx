import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleRsize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleRsize);

        return () => window.removeEventListener('resize', handleRsize);
    }, []);

    useEffect(() => {
        if (size.width > 1010 & menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const orderClickHandler = () => {
        menuToggleHandler();
    };

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

   return ( 
   <header data-cy='navbar' id='navbar'>
    <div id='content'>
        <Link id="logo" to="/"> Cafe Creme </Link>
        <nav className={`${menuOpen && size.width < 1010 ? 'isMenu' : ''}`}>
            <ul>
                <li>
                    <Link to="/" onClick={menuToggleHandler}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={menuToggleHandler}>About</Link>
                </li>
                <li>
                    <Link to="/menu" onClick={menuToggleHandler}>Menu</Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={menuToggleHandler}>Gallery</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={menuToggleHandler}>Contact</Link>
                </li>
                <Link to="/orderSystem"><button onClick={orderClickHandler}> Order </button></Link>
            </ul>
        </nav>
        <div id='toggle'>
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
        </div>
    </div>
   </header> 
   )
}

export default Navbar;
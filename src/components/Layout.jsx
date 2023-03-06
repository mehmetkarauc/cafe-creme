import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function Layout({ children }) {
  return (
        <>
            <Navbar />
            <div id="main" className={'containers'}>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
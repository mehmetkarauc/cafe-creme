import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout.js';
import './scss/main.scss';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';
import Order from './pages/Order.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

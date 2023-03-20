import React from 'react';
import ProductList from '../components/ProductList.jsx';
import ProductNavbar from '../components/ProductNavbar.jsx';
import products from '../data/products.json';

function OrderSystem() {
  return (
    <>
        <ProductNavbar data={products}/>
        <ProductList data={products}/>
    </>
  )
}

export default OrderSystem;
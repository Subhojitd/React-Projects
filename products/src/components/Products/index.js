// src/Product.js
import React from 'react';

const Product = ({ title, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <div className='button-container'>
        <button className='addToCart'>Add to Cart</button>
        <button className='buyNow'>Buy Now</button>
      </div>
      
      
    </div>
  );
};

export default Product;


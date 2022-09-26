import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
   const { handleAddToCart, product } = props;
   const { name, seller, price, ratings, img } = product;
   return (
      <div className='single-container'>
         <div className='single-product'>
            <img src={img ? img : 'url'} alt="" />
            <h2 className='single-product-title'>{name}</h2>
            <h4 className='single-product-price'>Price: ${price}</h4>
            <p><small>Manufucture: {seller}</small></p>
            <p><small>Ratting: {ratings}</small></p>
         </div>
         <div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
               <p>Add to Cart</p>
               <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
         </div>
      </div>
   );
};

export default Product;
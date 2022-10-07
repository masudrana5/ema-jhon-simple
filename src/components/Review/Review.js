import React from 'react';
import './Review.css';

const Review = ({ product, removeHandler }) => {
   const { name, price, img, quantity, id } = product;
   return (
      <div className='review-container'>
         <img src={img} alt="" />
         <div className="review-product-container">
            <div className="product-details">
               <p>{name}</p>
               <p>Price: {price}$</p>
               <p>Quantity: { quantity}</p>
            </div>
            <div className="product-delete">
               <button onClick={()=> removeHandler(id)}>Delete</button>
            </div>
         </div>
         
      </div>
   );
};

export default Review;
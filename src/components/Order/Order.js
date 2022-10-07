import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
   const { products, initialValue } = useLoaderData();
   const [cart, setCart] = useState(initialValue);
   const removeHandler = (id) => {
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining);
      removeFromDb(id);
   }
   const clearCart = () => {
      setCart([]);
      deleteShoppingCart();
   }
   return (
      <div className='shop-container'>
         <div className='reviews-container'>
            {
               cart.map(product => <Review
                  product={product}
                  key={product.id}
                  removeHandler={removeHandler}
               ></Review>)
            }
            {
               cart.length===0 && <h2>No items for review <Link to='/'>Shop More</Link></h2>
            }

         </div>
         <div className='cart-container'>
            <Cart clearCart={clearCart} cart={cart}></Cart>
         </div>
         
      </div>
   );
};

export default Order;
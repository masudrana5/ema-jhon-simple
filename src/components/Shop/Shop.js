import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   const [cart, setCart] = useState([]);
   const products = useLoaderData();

   useEffect(() => {
      const storedCart = getShoppingCart();
      const savedCart = [];
      for (const id in storedCart) {
         const getProduct = products.find(product => product.id === id);
         if (getProduct) {
            const quantity = storedCart[id];
            getProduct.quantity = quantity;
            savedCart.push(getProduct);
         }
      }
      setCart(savedCart);
   },[products])
   const handleAddToCart = (selectedProduct) => {
      let newCart = [];
      const exists = cart.find(product => product.id === selectedProduct.id);
      if (!exists) {
         selectedProduct.quantity = 1;
         newCart = [...cart, selectedProduct];
      } else {
         const rest = cart.filter(product => product.id !== selectedProduct.id);
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, exists];
      }
      setCart(newCart);
      addToDb(selectedProduct.id)
   }

   const clearCart = () => {
      setCart([]);
      deleteShoppingCart();
   }
   return (
      <div className='shop-container'>
         <div className="product-container">
            {
               products.map(product => <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
               ></Product>)
            }
            
         </div>
         <div className="cart-container">
            <Cart clearCart={clearCart} cart={cart}>
               <Link to='/order'>
                  <button>Review Order</button>
               </Link>
            </Cart>
         </div>
      </div>
   );
};

export default Shop;
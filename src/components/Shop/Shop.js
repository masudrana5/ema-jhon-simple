import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [cart]);

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
   const handleAddToCart = (product) => {
      //this is the old version
      // cart.push(product);
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)
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
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;
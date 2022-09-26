import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const { cart } = props;
   let total = 0;
   let shipping = 0;
   let quantity = 0;
   for (const product of cart) {
      total += product.price * product.quantity;
      shipping += product.shipping * product.quantity;
      quantity += product.quantity;
   }
   const tax = parseFloat((total * 0.1).toFixed(2));
   const grandTotal = total + shipping + tax;
   return (
      <div className='cart-container'>
         <h2 className='cart-title'>Order Summary</h2>
         <p>Selected Items: {quantity}</p>
         <p>Total Price: { total}</p>
         <p>Shipping Charge: { shipping}</p>
         <p>Tax: { tax}</p>
         <h4>Grand Total: { grandTotal}</h4>
      </div>
   );
};

export default Cart;
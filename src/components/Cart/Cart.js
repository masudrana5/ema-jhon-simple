import React from 'react';

const Cart = (props) => {
   return (
      <div>
         <h1>cart container</h1>
         <p>Product items: {props.cart.length}</p>
      </div>
   );
};

export default Cart;
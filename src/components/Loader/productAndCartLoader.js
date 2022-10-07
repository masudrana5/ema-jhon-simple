import { getShoppingCart } from "../../utilities/fakedb";

export const productAndCartLoader = async () => {
   const productsData = await fetch('products.json');
   const products = await productsData.json();

   const savedCart = getShoppingCart();
   const initialValue = [];
   for (const id in savedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
         const quantity = savedCart[id];
         addedProduct.quantity = quantity;
         initialValue.push(addedProduct);
      }
   }

   return {products: products, initialValue: initialValue};
}
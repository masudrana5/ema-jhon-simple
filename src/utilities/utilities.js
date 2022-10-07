const myData = () => {
   let shoppingBox = {};
   const appleBox = localStorage.getItem('apple');
   if (appleBox) {
     shoppingBox = JSON.parse(appleBox);
   }
   localStorage.setItem('Apple', JSON.stringify(shoppingBox));
}

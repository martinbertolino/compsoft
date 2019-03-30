'use strict';

const addToCart = (cart, item, quantity) => {
  return {
    ...cart,
    items: cart.items.concat([
      {
        item,
        quantity,
      },
    ]),
  };
};

const originalCart = {
  items: [],
};

const newCart = addToCart(
  originalCart,
  {
    name: 'Digital SLR Camera',
    price: '1495',
  },
  1,
);

console.log(JSON.stringify(originalCart, null, 2));

console.log(JSON.stringify(newCart, null, 2));

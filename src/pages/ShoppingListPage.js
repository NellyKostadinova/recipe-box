import React from 'react';
import CartImage from '../assets/images/cart.svg';

function ShoppingListPage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={CartImage}
        alt="cart"
        style={{
          width: '200px'
        }}
      />
      <h1 style={{ fontSize: '4em' }}>Coming Soon</h1>
    </div>
  );
}

export default ShoppingListPage;

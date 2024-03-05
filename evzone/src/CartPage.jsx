// CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPagestyle.css';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleremoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleremoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

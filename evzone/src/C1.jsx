// C1.jsx
import React, { useContext } from 'react';
import './Shopitem.css';
import { CartContext } from './CartContext';

const C1 = ({ item }) => {
  const { cart, addToCart,removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const cartItem = cart.find((cartItem) => cartItem.id === item.id);

  const handleAddToCart = () => {
    if (cartItem) {
      updateCartItemQuantity(item.id, cartItem.quantity + 1);
    } else {
      addToCart({ ...item, quantity: 1 });
    }
  };

  const handleRemoveFromCart = () => {
    if (cartItem && cartItem.quantity > 1) {
      updateCartItemQuantity(item.id, cartItem.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className='itembody'>
      <img src='cycle1.png' alt='cycle' />
      <h1 className='itemh1'>EMotorad Doodle</h1>
      <p className="itemp">4.5/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
          <br /></p>
      <h2 className='itemh2'>About the E-Cycle</h2>
      <p className='itemp'>This new-age E-bike promises to keep your style quotient up without compromising on the safety parameters. Designed to suit your comfort levels, this is the perfect companion with whom you will love exploring the heights.</p><br /><br /><br /><br />
      <div className="itembutton-center">
          {cartItem ? (
              <>
                  <button type="button" className='itembutton' onClick={handleRemoveFromCart}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button type="button" className='itembutton' onClick={handleAddToCart}>+</button>
              </>
          ) : (
              <button type="button" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
          )}
          <button type="button" className='itembutton'><a href="Address">Buy Now</a></button>
      </div>
    </div>
  );
};

export default C1;

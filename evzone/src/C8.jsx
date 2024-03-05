import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C8 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="Hero Electric Photon" />
    <h1 className='itemh1'>Hero Electric Photon</h1>
    <p className="itemp">3.9/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the Hero Electric Photon</h2><p className='itemp'>The Hero Electric Photon is a stylish and efficient electric scooter designed for urban mobility. It features a powerful motor and a long-lasting battery, providing a smooth and eco-friendly ride. With its modern design and advanced features, the Photon is an ideal choice for those looking for a sustainable and convenient mode of transportation.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C8
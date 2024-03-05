import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C22 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="LION EV AMPTEK 12V 14AH SMF BATTERY " />
    <h1 className='itemh1'>LION EV AMPTEK 12V 14AH SMF BATTERY  </h1>
    <p className="itemp">4.0/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the LION EV AMPTEK 12V 14AH SMF BATTERY</h2><p className='itemp'>The LION EV AMPTEK 12V 14AH SMF Battery is a high-quality sealed maintenance-free (SMF) battery designed for various applications, including electric vehicles, UPS systems, solar power systems, and more. With a voltage of 12V and a capacity of 14AH, it offers reliable and long-lasting power. Its sealed design ensures zero maintenance and makes it suitable for use in various environments.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C22
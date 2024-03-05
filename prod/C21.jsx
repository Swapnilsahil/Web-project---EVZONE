import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C21 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="LION EV BATTERY SPOT WELDING MACHINE SPOT GUN " />
    <h1 className='itemh1'>LION EV BATTERY SPOT WELDING MACHINE SPOT GUN  </h1>
    <p className="itemp">4.0/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the LION EV BATTERY SPOT WELDING MACHINE SPOT GUN</h2><p className='itemp'>The LION EV Battery Spot Welding Machine Spot Gun is a high-quality, precision spot welding gun designed specifically for electric vehicle (EV) battery pack assembly. It features advanced technology and a user-friendly interface, making it suitable for both professional and DIY battery pack assembly. Its robust construction and reliable performance make it an ideal choice for EV enthusiasts and professionals alike.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C21
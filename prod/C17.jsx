import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C17 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="Apé E-City/Fixed Battery " />
    <h1 className='itemh1'>Apé E-City/Fixed Battery  </h1>
    <p className="itemp">4.0/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the Apé E-City/Fixed Battery</h2><p className='itemp'>The Apé E-City/Fixed Battery is a three-wheeled electric vehicle designed for urban transportation. With a powerful motor and a fixed battery, it offers a smooth and eco-friendly ride. Its modern design and advanced features make it an ideal choice for those looking for a sustainable and convenient mode of transportation.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C17
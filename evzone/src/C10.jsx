import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C10 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="Batt:RE One" />
    <h1 className='itemh1'>Batt:RE One</h1>
    <p className="itemp">3.8/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the Batt:RE One</h2><p className='itemp'>The Batt:RE One is a sleek and efficient electric scooter designed for urban commuting. With a powerful motor and a long-lasting battery, it offers a smooth and eco-friendly ride. Its modern design and advanced features make it an ideal choice for those looking for a sustainable and convenient mode of transportation. </p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C10
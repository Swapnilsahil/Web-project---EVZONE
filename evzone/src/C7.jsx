import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C7 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="sc1.png" alt="prod7" />
    <h1 className='itemh1'>Hero Electric Optima</h1>
    <p className="itemp">4.2/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the Hero Electric Optima</h2><p className='itemp'>The Hero Electric Optima is a sleek, eco-friendly electric scooter designed for urban commuters. With a powerful motor and long-lasting battery, it offers a smooth and efficient ride, making it an ideal choice for sustainable mobility.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C7
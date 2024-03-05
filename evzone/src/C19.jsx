import React,{useContext} from 'react';
import './Shopitem.css';
import { CartContext} from './CartContext';

const C19 = ({item}) => {
  
    const { addToCart } = useContext(CartContext) || { cart: [] };;
  
    const handleAddToCart = () => {
      addToCart(item);
    };
  return (
    <>
    <body className='itembody'>
        <img src="prod.png" alt="LION EV 60V 30AH LFP BATTERY WITH FABRICATION " />
    <h1 className='itemh1'>LION EV 60V 30AH LFP BATTERY WITH FABRICATION  </h1>
    <p className="itemp">4.0/5 rating<br /> Use Coupon Code "SUNNY500" And Get Additional ₹ 500/ Off This Product.
        <br /></p><h2 className='itemh2'>About the LION EV 60V 30AH LFP BATTERY WITH FABRICATION</h2><p className='itemp'>The LION EV 60V 30AH LFP Battery with Fabrication is a high-quality lithium iron phosphate (LFP) battery designed for electric vehicles. With a voltage of 60V and a capacity of 30Ah, it offers a long-lasting and reliable power source. Its fabrication ensures durability and safety, making it an ideal choice for electric scooters, motorcycles, and other EVs.</p><br /><br /><br /><br />
    <div className="itembutton-center">
    <button type="submit" className='itembutton' onClick={handleAddToCart}>Add To Cart</button>
    <button type="submit" className='itembutton'><a href="Address">Buy Now</a></button>
    </div>
    </body>
    </>
  )
}

export default C19
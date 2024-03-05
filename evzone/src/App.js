import React from 'react'
import {Route ,Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Rental from './Rental';
import Shop from './Shop';
import C1 from './C1';
import C2 from './C2';
import C3 from './C3';
import C4 from './C4';
import C5 from './C5';
import C6 from './C6';
import C7 from './C7';
import C8 from './C7';
import C9 from './C7';
import C10 from './C7';
import C11 from './C7';
import C12 from './C7';
import C13 from './C7';
import C14 from './C7';
import C15 from './C7';
import C16 from './C7';
import C17 from './C7';
import C18 from './C7';
import C19 from './C7';
import C20 from './C7';
import C21 from './C7';
import C22 from './C7';
import Address from './Address';
import Payment from './Payment';
import Visa from './Visa';
import Mcard from './Mcard';
import Upi from './Upi';
import BatterySwappingPage from './Battery';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';


const App = () => {
  return (
    <>
    <CartProvider>
        <Routes>
        <Route   exact path='/' element={<Signup />} />
        <Route  exact path='/Login/Home' element={<Home />} />
        <Route  exact path='/Login' element={<Login hours />} />
        <Route  exact path='/Rental' element={<Rental />} />
        <Route  exact path='/Shop' element={<Shop />} />
        <Route  exact path='/C1' element={<C1
    item={{
        id: 'C1',  // Assuming 'C1' is the correct ID for this item
        name: 'EMotorad Doodle',
        color: 'black',
        price: '₹49,999',
        image: 'cycle1.png',
    }}
/>} />
        <Route  exact path='/C2' element={<C2 />} />
        <Route  exact path='/C3' element={<C3 />} />
        <Route  exact path='/C4' element={<C4 />} />
        <Route  exact path='/C5' element={<C5 />} />
        <Route  exact path='/C6' element={<C6 />} />
        <Route  exact path='/C7' element={<C7 />} />
        <Route  exact path='/C8' element={<C8 />} />
        <Route  exact path='/C9' element={<C9 />} />
        <Route  exact path='/C10' element={<C10 />} />
        <Route  exact path='/C11' element={<C11 />} />
        <Route  exact path='/C12' element={<C12 />} />
        <Route  exact path='/C13' element={<C13 />} />
        <Route  exact path='/C14' element={<C14 />} />
        <Route  exact path='/C15' element={<C15 />} />
        <Route  exact path='/C16' element={<C16 />} />
        <Route  exact path='/C17' element={<C17 />} />
        <Route  exact path='/C18' element={<C18 />} />
        <Route  exact path='/C19' element={<C19 />} />
        <Route  exact path='/C20' element={<C20 />} />
        <Route  exact path='/C21' element={<C21 />} />
        <Route  exact path='/C22' element={<C22 />} />
        <Route  exact path='/Address' element={<Address />} />
        <Route  exact path='/Payment' element={<Payment />} />
        <Route  exact path='/Visa' element={<Visa />} />
        <Route  exact path='/Mcard' element={<Mcard />} />
        <Route  exact path='/Upi' element={<Upi />} />
        <Route  exact path='/Battery' element={<BatterySwappingPage />} />
        <Route  exact path='/CartPage' element={<CartPage />} />
    
        </Routes>
        </CartProvider>
    </>
  )
}

export default App
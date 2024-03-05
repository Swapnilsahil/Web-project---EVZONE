// import React from 'react'
// import './Shop.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'




// const Shop = () => {
//   return (
//     <>
//     <body className='shopbody'>
//         <div className="shopnavbar" id="shopnav">
//         <div className="shoptext">
//          <div className="shoptext1">Deliver at:</div>
//          <div className="shoppin">
//          <div className="shoploc-icon"></div>
//          <div className="shoptext2"><input type="text" placeholder="Enter pincode" maxlength="6" /></div>
//          </div>
//         </div>
//         <div className="shopsearch">
//          <input type="text" id="shopsearch-input" placeholder="search here for E-cycles,E-bikes & accessories" />
//          <div className="shopsearch-icon" style={{color:'white'}}>
//          <FontAwesomeIcon icon={faSearch} />

//         </div>
//         </div>
//         <div className="shopcart-icon">
//         <FontAwesomeIcon icon={faCartShopping} />

//         </div>
//         <div className="shopliked-icon">
//             <i className="fa-regular fa-heart"></i>
//         </div>
        
//     </div>
//      <div className="shopimgbar">
//         <div className="shopimg1"></div>
//         <div className="shopimg2"></div>
//     </div>
//     <div className="shopsections">
//         <div className="shopsec"><a href="#cycle">E-CYCLE</a></div>
//         <div className="shopsec"><a href="#bike">E-SCOOTERS</a></div>
//         <div className="shopsec"><a href="#rickshaw">E-RICKSHAW</a></div>
//         <div className="shopsec"><a href="#battery">BATTERY</a></div>
//         <div className="shopsec"><a href="#accessories">ACCESSORIES</a></div>
//     </div>

//     <div className="shopcat1" id="cycle">E-CYCLE</div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="C1"><div className="shopimg" style={{backgroundImage: "url('cycle1.png')"}} ></div></a>
//             <div className="shopitem-name">EMotorad Doodle</div>
//             <div className="shopinfo">Color:black<br /><s>₹54,999</s> ₹49,999</div>
//         </div>
//         <div className="shopbox">
//             <a href="C2"><div className="shopimg" style={{backgroundImage: "url('cycle2.png')"}}></div></a>
//             <div className="shopitem-name">Hero Lectro C8</div>
//             <div className="shopinfo">Color:grey<br /><s>₹36,999</s> ₹35,999</div>
//         </div>
//         <div className="shopbox">
//             <a href="C3"><div className="shopimg" style={{backgroundImage: "url('cycle3.png')"}}></div></a>
//             <div className="shopitem-name">E-Motorad EMX</div>
//             <div className="shopinfo">Color:neon yellow<br /><s>₹66,999 </s>₹58,999</div>
//         </div>
//     </div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="C4"><div className="shopimg" style={{backgroundImage: "url('cycle4.png')"}}></div></a>
//             <div className="shopitem-name">Hero Lectro C9</div>
//             <div className="shopinfo">Color:brown<br /><s>₹46,999</s> ₹45,999</div>
//         </div>
//         <div className="shopbox">
//             <a href="C5"><div className="shopimg" style={{backgroundImage: "url('cycle5.png')"}}></div></a>
//             <div className="shopitem-name">Motovolt HUM</div>
//             <div className="shopinfo">Color:black<br /><s>₹36,100</s> ₹35,600</div>
//         </div>
//         <div className="shopbox">
//             <a href="C6"><div className="shopimg" style={{backgroundImage: "url('cycle6.png')"}}></div></a>
//             <div className="shopitem-name">Svitch XE</div>
//             <div className="shopinfo">Color:black<br /><s>₹93,450</s> ₹92,450</div>
//         </div>
//     </div>
//     <div className="shopcat1" id="bike">E-SCOOTERS</div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('sc1.png')"}}></div></a>
//             <div className="shopitem-name">Hero Electric Optima</div>
//             <div className="shopinfo">Color:cyan<br />₹63,190</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('sc2.png')"}}></div></a>
//             <div className="shopitem-name">Hero Electric Photon</div>
//             <div className="shopinfo">Color:red<br />₹80,790</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('sc3.png')"}}></div></a>
//             <div className="shopitem-name">Ampere Reo Elite</div>
//             <div className="shopinfo">Color:blue<br />₹60,490</div>
//         </div>
//     </div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('sc4.png')"}}></div></a>
//             <div className="shopitem-name">Batt:RE One</div>
//             <div className="shopinfo">Color:red<br />₹73,900</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('sc5.png')"}}></div></a>
//             <div className="shopitem-name">Gemopai Astrid</div>
//             <div className="shopinfo">Color:red<br />₹84,699</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('sc6.png')"}}></div></a>
//             <div className="shopitem-name">Ampere Magnus Pro</div>
//             <div className="shopinfo">Color:red<br />₹72,999</div>
//         </div>
//     </div>
//     <div className="shopcat1" id="rickshaw">E-RICKSHAW</div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('ric1.png')"}}></div></a>
//             <div className="shopitem-name">Rage+ Tipper</div>
//             <div className="shopinfo">Color:yellow<br /></div>
//         </div>
//         <div className="shopbox">
//             <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('ric2.png')"}}></div></a>
//             <div className="shopitem-name">E-Alfa Mini</div>
//             <div className="shopinfo">Color:red<br /></div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('ric3.png')"}}></div></a>
//             <div className="shopitem-name">Ape E-City/Swappable</div>
//             <div className="shopinfo">Color:blue<br /></div>
//         </div>
//     </div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="movie1.html"><div className="shopimg" style={{backgroundImage: "url('ric4.png')"}}></div></a>
//             <div className="shopitem-name">HiLoad HDXR</div>
//             <div className="shopinfo">Color:white<br /></div>
//         </div>
//         <div className="shopbox">
//             <a href="movie2.html"><div className="shopimg" style={{backgroundImage: "url('ric5.png')"}}></div></a>
//             <div className="shopitem-name">Apé E-City/Fixed Battery</div>
//             <div className="shopinfo">Color:blue<br /></div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopimg" style={{backgroundImage: "url('ric6.png')"}}></div></a>
//             <div className="shopitem-name">HiLoad DVXR</div>
//             <div className="shopinfo">Color:white<br /></div>
//         </div>
//     </div>
//     <div className="shopcat1" id="battery">BATTERY</div>
//     <div className="shopsection">
//         <div className="shopbox">
//             <a href="movie1.html"><div className="shopbat-img" style={{backgroundImage: "url('b1.webp')"}}></div></a>
//             <div className="shopitem-name">LION EV 60V 30AH LFP BATTERY WITH FABRICATION</div>
//             <div className="shopinfo"><br /><s>Rs. 46,500.00</s>Rs. 37,200.00</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie2.html"><div className="shopbat-img" style={{backgroundImage: "url('b2.webp')"}}></div></a>
//             <div className="shopitem-name">LION EV LSP-A100 SPOT WELDING MACHINE</div>
//             <div className="shopinfo"><br /><s>Rs. 18,125.00</s>Rs. 14,500.00</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopbat-img" style={{backgroundImage: "url('b3.webp')"}}></div></a>
//             <div className="shopitem-name">LION EV BATTERY SPOT WELDING MACHINE SPOT GUN</div>
//             <div className="shopinfo"><br /><s>Rs. 4,999.00</s>Rs. 1,200.00</div>
//         </div>
//         <div className="shopbox">
//             <a href="movie3.html"><div className="shopbat-img" style={{backgroundImage: "url('b4.webp')"}}></div></a>
//             <div className="shopitem-name">LION EV AMPTEK 12V 14AH SMF BATTERY   </div>
//             <div className="shopinfo"><br /><s>Rs. 3,500.00</s>Rs. 2,800.00</div>
//         </div>
//     </div>
//     </body>
//     </>
//   )
// }

// export default Shop
import React, { useState,useContext } from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom';

const Shop = () => {
    const { cart } = useContext(CartContext) || { cart: [] };
    const allProducts = [
        {
            id: 'C1',
            name: 'EMotorad Doodle',
            color: 'black',
            previousPrice: '₹54,999',
            price: '₹49,999',
            image: 'cycle1.png',
            url: 'C1',
        },
        {
            id: 'C2',
            name: 'Hero Lectro C8',
            color: 'grey',
            previousPrice: '₹36,999',
            price: '₹35,999',
            image: 'cycle2.png',
            url: 'C2',
        },
        {
            id: 'C3',
            name: 'E-Motorad EMX',
            color: 'neon yellow',
            previousPrice: '₹66,999',
            price: '₹58,999',
            image: 'cycle3.png',
            url: 'C3',
        },
        {
            id: 'C4',
            name: 'Hero Lectro C9',
            color: 'brown',
            previousPrice: '₹46,999',
            price: '₹45,999',
            image: 'cycle4.png',
            url: 'C4',
        },
        {
            id: 'C5',
            name: 'Motovolt HUM',
            color: 'black',
            previousPrice: '₹36,100',
            price: '₹35,600',
            image: 'cycle5.png',
            url: 'C5',
        },
        {
            id: 'C6',
            name: 'Svitch XE',
            color: 'black',
            previousPrice: '₹93,450',
            price: '₹92,450',
            image: 'cycle6.png',
            url: 'C6',
        },
        {
            id: 'SC1',
            name: 'Hero Electric Optima',
            color: 'cyan',
            price: '₹63,190',
            image: 'sc1.png',
            url: 'C7',
        },
        {
            id: 'SC2',
            name: 'Hero Electric Photon',
            color: 'red',
            price: '₹80,790',
            image: 'sc2.png',
            url: 'SC2',
        },
        {
            id: 'SC3',
            name: 'Ampere Reo Elite',
            color: 'blue',
            price: '₹60,490',
            image: 'sc3.png',
            url: 'SC3',
        },
        {
            id: 'SC4',
            name: 'Batt:RE One',
            color: 'red',
            price: '₹73,900',
            image: 'sc4.png',
            url: 'SC4',
        },
        {
            id: 'SC5',
            name: 'Gemopai Astrid',
            color: 'red',
            price: '₹84,699',
            image: 'sc5.png',
            url: 'SC5',
        },
        {
            id: 'SC6',
            name: 'Ampere Magnus Pro',
            color: 'red',
            price: '₹72,999',
            image: 'sc6.png',
            url: 'SC6',
        },
        {
            id: 'RIC1',
            name: 'Rage+ Tipper',
            color: 'yellow',
            image: 'ric1.png',
            url: 'RIC1',
        },
        {
            id: 'RIC2',
            name: 'E-Alfa Mini',
            color: 'red',
            image: 'ric2.png',
            url: 'RIC2',
        },
        {
            id: 'RIC3',
            name: 'Ape E-City/Swappable',
            color: 'blue',
            image: 'ric3.png',
            url: 'RIC3',
        },
        {
            id: 'RIC4',
            name: 'HiLoad HDXR',
            color: 'white',
            image: 'ric4.png',
            url: 'RIC4',
        },
        {
            id: 'RIC5',
            name: 'Apé E-City/Fixed Battery',
            color: 'blue',
            image: 'ric5.png',
            url: 'RIC5',
        },
        {
            id: 'RIC6',
            name: 'HiLoad DVXR',
            color: 'white',
            image: 'ric6.png',
            url: 'RIC6',
        },
        {
            id: 'B1',
            name: 'LION EV 60V 30AH LFP BATTERY WITH FABRICATION',
            previousPrice: 'Rs. 46,500.00',
            price: 'Rs. 37,200.00',
            image: 'b1.webp',
            url: 'B1',
        },
        {
            id: 'B2',
            name: 'LION EV LSP-A100 SPOT WELDING MACHINE',
            previousPrice: 'Rs. 18,125.00',
            price: 'Rs. 14,500.00',
            image: 'b2.webp',
            url: 'B2',
        },
        {
            id: 'B3',
            name: 'LION EV BATTERY SPOT WELDING MACHINE SPOT GUN',
            previousPrice: 'Rs. 4,999.00',
            price: 'Rs. 1,200.00',
            image: 'b3.webp',
            url: 'B3',
        },
        {
            id: 'B4',
            name: 'LION EV AMPTEK 12V 14AH SMF BATTERY',
            previousPrice: 'Rs. 3,500.00',
            price: 'Rs. 2,800.00',
            image: 'b4.webp',
            url: 'B4',
        },
    ];

    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setFilteredProducts(filterProducts(e.target.value));
    };

    const filterProducts = (searchTerm) => {
        if (!searchTerm.trim()) {
            return allProducts;
        }

        return allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <>
            <body className='shopbody'>
                {/* Navbar */}
                <div className="shopnavbar" id="shopnav">
                    <div className="shoptext">
                        <div className="shoptext1">Deliver at:</div>
                        <div className="shoppin">
                            <div className="shoploc-icon"></div>
                            <div className="shoptext2"><input type="text" placeholder="Enter pincode" maxLength="6" /></div>
                        </div>
                    </div>
                    <div className="shopsearch">
                        <input
                            type="text"
                            id="shopsearch-input"
                            placeholder="search here for E-cycles, E-bikes & accessories"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        />
                        {/* <div className="shopsearch-icon" style={{ color: 'white' }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div> */}
                    </div>
                    <div className="shopcart-icon">
                    <NavLink to='./CartPage'> <FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <span className="cart-badge">{cart.length}</span>
                    </div>
                    <div className="shopliked-icon">
                        {/* Use the liked icon */}
                    </div>
                </div>
                {/* Image bar */}
                <div className="shopimgbar">
                    <div className="shopimg1"></div>
                    <div className="shopimg2"></div>
                </div>
                {/* Sections */}
                <div className="shopsections">
                    <div className="shopsec"><a href="#cycle">E-CYCLE</a></div>
                    <div className="shopsec"><a href="#bike">E-SCOOTERS</a></div>
                    <div className="shopsec"><a href="#rickshaw">E-RICKSHAW</a></div>
                    <div className="shopsec"><a href="#battery">BATTERY</a></div>
                    <div className="shopsec"><a href="#accessories">ACCESSORIES</a></div>
                </div>

                {/* Render filtered products or all products */}
                {filteredProducts.length > 0 ? (
                    <div className="shopsection">
                    
                        {filteredProducts.map((product) => (
                            <div className="shopbox" key={product.id}>
                                <a href={product.url}>
                                    <div className="shopimg" style={{ backgroundImage: `url(${product.image})` }}></div>
                                </a>
                                <div className="shopitem-name">{product.name}</div>
                                <div className="shopinfo">Color: {product.color}<br /><s>{product.previousPrice}</s> {product.price}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="shopsection">
                        {allProducts.map((product) => (
                            <div className="shopbox" key={product.id}>
                                <a href={product.url}>
                                    <div className="shopimg" style={{ backgroundImage: `url(${product.image})` }}></div>
                                </a>
                                <div className="shopitem-name">{product.name}</div>
                                <div className="shopinfo">Color: {product.color}<br /><s>{product.previousPrice}</s> {product.price}</div>
                            </div>
                        ))}
                        {/* NO PRODUCTS FOUND */}
                    </div>
                )}

            </body>
        </>
    );
};

export default Shop;

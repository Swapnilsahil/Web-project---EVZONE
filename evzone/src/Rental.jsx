import React from 'react'
import img from './hero-lectro-cycle.webp'
import './Rental.css';
import './Rentaljs';

const Rental = () => {
  return (
    <>
        <section id="vehicles">
        <div class="vehicle-container" id="vehicle1">
            <img src={img} alt="Vehicle1" />
            <h3>Hero lectro</h3>
            <p id="price1"></p>
        </div>
        
        <div class="vehicle-container" id="vehicle2">
            <img src='./ola s1 pro.webp'  alt="Vehicle 2" />
            <h3>Ola s1 pro</h3>
            <p id="price2"></p>
        </div>

        <div class="vehicle-container" id="vehicle3">
            <img src="tvs-iqube.webp" alt="Vehicle 3" />
            <h3>TVS iqube</h3>
            <p id="price3"></p>
        </div>

        <div class="vehicle-container" id="vehicle4">
            <img src="yo-edge.webp" alt="Vehicle 4" />
            <h3>Yo edge</h3>
            <p id="price4"></p>
        </div>

        <div class="vehicle-container" id="vehicle5">
            <img src="revolt-400.webp" alt="Vehicle 5" />
            <h3>revolt-400</h3>
            <p id="price5"></p>
        </div>

        <div class="vehicle-container" id="vehicle6">
            <img src="tata tiago ev.webp" alt="Vehicle 6" />
            <h3>Tata Tiago ev</h3>
            <p id="price6"></p>
        </div>

    </section>
    </>
  )
}

export default Rental
import React, { useState } from 'react';
import './battery.css';
import { useNavigate } from 'react-router-dom';

const BatterySwappingPage = () => {
  const navigate=useNavigate();
  const[submitted,setSubmitted]=useState();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicle_make: '',
    vehicle_model:'',
    message:''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Make a POST request to your server to save the address
        const response=await fetch("http://localhost:5000/Battery",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(formData),
        });
        if(response.ok){
          navigate('/payment');
          setSubmitted(true);
        }
        console.log(response.data);
        // Optionally, you can reset the form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          vehicle_make: '',
          vehicle_model:'',
          message:''
        });
    } catch (error) {
        console.error('Error saving address:', error);
    }
};
  return (

    <body className='battbody'>
    <div className="batcontainer">
      <h1>Battery Swapping Facilities for EVs</h1>
      <p>Please fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name='fullName' value={formData.fullName} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} required />
        
        <label>Phone:</label>
        <input type="tel" name='phone' value={formData.phone} onChange={handleChange} required />
        
        <label>Vehicle Make:</label>
        <input type="text" name='vehicle_make' value={formData.vehicle_make} onChange={handleChange} required />
        
        <label>Vehicle Model:</label>
        <input type="text" name='vehicle_model' value={formData.vehicle_model} onChange={handleChange} required />
        
        <label>Message:</label>
        <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
        
        <button type="submit" className='batbut'>Submit</button>
      </form>

      {submitted && (
        <div className="submitted-message">
          <p>Thank you for your submission!</p>
          <p>We will get in touch with you soon.</p>
        </div>
      )}

      <div className="facilities">
        <h2>Our Facilities</h2>
        <ul>
          <li>Quick and efficient battery swapping</li>
          <li>Wide range of compatible vehicle models</li>
          <li>Convenient locations with easy access</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
    </div>
    </body>
  );
};

export default BatterySwappingPage;
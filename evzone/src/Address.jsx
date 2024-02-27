import React,{useState} from 'react';
import './Address.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Address = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    pinCode: ''
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
        const response=await fetch("http://localhost:5000/Address",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(formData),
        });
        if(response.ok){
          navigate('/payment');
        }
        console.log(response.data);
        // Optionally, you can reset the form fields after successful submission
        setFormData({
            fullName: '',
            address: '',
            city: '',
            pinCode: ''
        });
    } catch (error) {
        console.error('Error saving address:', error);
    }
};


  return (
    <body className='addbody'>
    <div className="container">
        <h2>ADDRESS DETAILS</h2>
        {/* <form action="Payment"id="purchaseForm" onSubmit={handleSubmit} >
            <label for="fullName">Full Name:</label>
            <input type="text" name='fullName'  id="fullName" onChange={handleChange}  required />

            <label for="address">Address:</label>
            <textarea id="address" name="address" onChange={handleChange} rows="4" required ></textarea>

            <label for="city">City:</label>
            <input type="text" id="city" name='city' onChange={handleChange}  required />

            <label for="pinCode">Pin Code:</label>
            <input type="text" id="pinCode" name='pinCode' onChange={handleChange}  required />

            <button type="submit">Buy</button>
        </form> */}
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

        <label htmlFor="pinCode">Pin Code:</label>
        <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} required />

        <button type="submit"><NavLink to='/Payment' style={{color:'white', textDecoration:'none'}}>Submit</NavLink></button>
</form>

    </div>
    </body>

  )
}

export default Address
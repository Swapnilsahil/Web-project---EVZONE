import React,{useState} from 'react'
import './Login.css';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    email:'',
    password:''
  })

  //const [errors ,setErrors] = useState({})

  const handleChange = (e) =>{
    const {name,value} =e.target;
    setFormData({
      ...formData,[name] : value
    })
  }

  const handleSubmit =async (e) =>{
    e.preventDefault()

    try {
      const response=await fetch("http://localhost:5000/Login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
      
    });
    if(response.ok){
      navigate('./Home');
    }
    console.log(response);
    } catch (error) {
      console.log("register",error);
      
    }
  }

  return (
    <>
    <body className='logbody'>
        <div className="logcontainer">
        <form onSubmit={handleSubmit}>
            
            <div class="logcontents">
                <h2>EV ZONE</h2>
                <label for="email">Email Id</label><br />
                <div id="loginput"><input type="email" id="email" name='email' onChange={handleChange} placeholder="Enter your email id"  required/><br /></div>
                
                <label for="password">Password:</label><br />
                <div id="loginput"><input type="password" name='password' id="password" onChange={handleChange}  required/><br /></div>
                
                <button type="submit"  id="logsubmit">Log in</button>
            </div>
        </form>
    </div>
    </body>
    </>
  )
}

export default Login
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import { useState } from "react"
import { useNavigate ,Link} from "react-router-dom"

const Signup = () => {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",location:""})
  let navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}));
        const response= await fetch("http://localhost:4000/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}),
        })
        const json=await response.json()
        if(json.success){
        console.log(json);
        navigate("/login");
        } 
        else if(!json.success){
            alert("enter valid credentials");
        }
  }
  const handleChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value});
  }
   
  return (
    <>
       <Navbar/>
      <div className="container d-flex flex-column align-items-center mb-5 mt-4 ">
        <div className="fs-1 ">Signup </div>
        <div className="fw-light text-black-50 mb-4">Best place to buy and sell digital products.</div>

      <form className="border border-2 p-4 rounded container" style={{"maxWidth":"60%"}}  onSubmit={handleSubmit}>
  <div className="mb-3">
   
    <label htmlFor="exampleInputName1" className="form-label fw-bold">First Name</label>
    <input type="text" name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={credentials.name} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={handleChange}/>
  </div>
  <div className="mb-3 ">
   
    <label htmlFor="exampleInputlocation1" className="form-label fw-bold">Address</label>
    <input type="text" name="location" className="form-control" id="exampleInputlocation1" value={credentials.location} onChange={handleChange}/>
  </div>
  <div className="text-center my-2 ">
  <button type="submit" className="btn btn-sm text-white fs-6 fw-bold rounded " style={{"backgroundColor":"#27AE9A"}} >Submit</button>
  </div>
  <div>Already have a account? <Link to="/login" className="color icon-link link-dark " style={{"--hover-color":"#27AE9A"}}>Login</Link></div>
</form>
</div>

  <Footer/>

    </>
  )
}

export default Signup

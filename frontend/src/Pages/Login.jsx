/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import {useState} from "react"
import {Link,useNavigate}from "react-router-dom"

const Login = () => {

  const[credentials,setcredentials]=useState({email:"",password:""});
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:4000/api/loginuser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json=await response.json();
    if(!json.success){
      alert("Invalid Credentials");
    }else{
      localStorage.setItem("email",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      navigate("/");
    }
  }

  const handleChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
      
      <Navbar/>
      <div className="container d-flex flex-column align-items-center mb-5 mt-4 ">
        <div className="fs-1 ">Login </div>
        <div className="fw-light text-black-50 mb-4">Get access to your Orders, Wishlist and Recommendations.</div>

      <form className="border p-4 rounded" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <div className="text-end "><a href="#" className="text-black-50 icon-link link-dark">Forget Password?</a></div>
  <div className="text-center mt-2 ">
  <button type="submit" className="btn btn-sm text-white fs-6 fw-bold rounded " style={{"backgroundColor":"#27AE9A"}}>Submit</button>
  </div>
  <div><Link to="/signup" className=" icon-link link-dark " style={{"--bs-link-hover-color":"#27AE9A"}}>Create Account?</Link></div>
</form>
</div>

<Footer/>
    </>
  )
}

export default Login

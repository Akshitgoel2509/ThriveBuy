/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Header from '../Component/Header'
import logo from "../Photos/thrive1.png"
// import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState,useEffect} from 'react';
import Cart from './Cart';
// import Modal from "../Modal"
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const MODAL_STYLES = {
  position: 'fixed',
  top: '0%',
  right: '0%',
  backgroundColor: 'white',
  // transform: 'translateX(0%)',
  zIndex: 1000,
  height: '100%',
  width: '25%',
  // transition: all 0.1s ease-out ,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const [visibleLoc, setvisibleLoc] = useState(false)
  const [category, setcategory] = useState([]);
  const [currlocation, setcurrlocation] = useState("Location")
  const [cart, setcart] = useState(false)

  const loadCategory=async()=>{
    let response=await fetch("https://dummyjson.com/products/category-list");
    let data=await response.json();
    setcategory(data);
}

  const DropdownVisible=(e)=>{
    if(e.target.id=="category")
    setvisible(true);

    else if(e.target.id==="location")
    setvisibleLoc(true);
  }
  const DropdownNotVisible=()=>{
    setvisible(false);
    setvisibleLoc(false)
  }

  const getUserCurrAddress=async(lat,lon)=>{
    try{
    // const response =await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=abd418855852030250f8e185a2957997`);
    const response =await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lon}&key=209bc82b907b43cbb7af159fe8875b31`)
    const data=await response.json();
    const loc= data.results[0].components.state;
    console.log(loc);
    setcurrlocation(loc);
  }
     catch(err){
      console.log(error);
  }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
  };
  
   function success(pos) {
    const crd = pos.coords;
    let lat=crd.latitude;
    let lon=crd.longitude;
     getUserCurrAddress(lat,lon);

    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);

  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const currentLocation=()=>{
      navigator.geolocation.getCurrentPosition(success,error,options);
  }

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }

  useEffect(()=>{
    loadCategory();
},[])


  return (
    <>
    <Header/>
    <nav className="navbar navbar-expand-lg d-flex flex-column ">
     <div className="container-fluid px-5 ">
      <img src={logo} alt="thrivebuy" className="rounded img-fluid" style={{"maxHeight":"80px","maxWidth":"15wh"}}/>
    
       <div className="input-group w-50  ">
            <input className="form-control border-end-0 border py-3   " type="text" placeholder="Search Products..." id="example-search-input"/>
            <span className="input-group-append">
                <button className=" border-start-0 border h-100 rounded-end bg-white" type="button">
      
                    <SearchIcon sx={{"color":"#27ae9a"}}/>
                </button> 
            </span>
     </div>




     <div className="d-flex justify-content-between">

     {(localStorage.getItem("authToken"))?
     <>
      <div className="px-3"><a href="#" style={{"textDecoration":"none","color":"black"}}><FavoriteBorderIcon fontSize="large" sx={{"opacity":"0.75"}} />Wishlist</a></div>
      <div className="px-3"><a style={{"textDecoration":"none","color":"black"}} onClick={()=>{setcart(true)}}><ShoppingBagOutlinedIcon fontSize="large" sx={{"opacity":"0.75"}} />Cart</a></div>
      {(cart? <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={{height:"10%"}}>
      <div className=' d-flex justify-content-between h-100 py-3 px-1 ps-2'>
        <div className=" fs-5 m-2 mx-2 ">My Cart </div>
        <button className=' m-2 fs-5 border border-white bg-white'  onClick={()=>{setcart(false)}}> X </button> 
        </div>
        </div>
        <div style={{height:"90%"}}>
        <Cart/>
        </div>
        </div>
    </>:null)}
      <div className='px-3'><a style={{"textDecoration":"none","color":"black"}} onClick={handleLogout}><PersonOutlineOutlinedIcon fontSize="large" sx={{"opacity":"0.75"}} />Logout</a></div>
      </>
      :
      <>
      <div className="px-3"><a href="/login" style={{"textDecoration":"none","color":"black"}}><FavoriteBorderIcon fontSize="large" sx={{"opacity":"0.75"}} />Wishlist</a></div>
      <div className="px-3"><a href="/login" style={{"textDecoration":"none","color":"black"}}><ShoppingBagOutlinedIcon fontSize="large" sx={{"opacity":"0.75"}} />Cart</a></div>
      <div className='px-3'><a href="/login" style={{"textDecoration":"none","color":"black"}}><PersonOutlineOutlinedIcon fontSize="large" sx={{"opacity":"0.75"}} />Login</a></div>
      </>
    }
    </div>
    </div>
</nav>

 

    <div className='px-5  d-flex justify-content-between border-bottom border-top'>
     
     <div className='py-2' id='category' onMouseEnter={DropdownVisible} onMouseLeave={DropdownNotVisible} >
      <button className='py-2 px-3 text-light fs-5 rounded border border-none  ' style={{"backgroundColor":"#27AE9A"}} >
       <span className='me-2 align-text-bottom'> <CategoryOutlinedIcon fontSize='medium' /></span>
       <span>All Categories </span> 
       <span><KeyboardArrowDownOutlinedIcon fontSize='medium'/></span>
       { visible &&
         <div className=' py-3 border row mt-3 text-center justify-content-md-center rounded ' style={{"zIndex":"100","position":"absolute", "max-width":"35vw","marginLeft":"-16px","backgroundColor":"#f3f8f4"}} >
          {
            category.map(data=>{
              return (
                
                <li className=" text-white m-2 py-1 col-3 rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}}>
                 <a href="" className='fs-6 text-white'>{data}</a> 
                </li>
              )
            })
          }
         </div>
        }
        </button>
        </div>

        <div className='py-2' id='location' onMouseEnter={DropdownVisible} onMouseLeave={DropdownNotVisible} >
      <button className='py-2 px-3 text-light fs-5 rounded border border-none  ' style={{"backgroundColor":"#27AE9A"}} >
       <span className='me-2 align-text-bottom'> <LocationOnOutlinedIcon fontSize='medium'/></span>
       <span>{currlocation} </span> 
       <span><KeyboardArrowDownOutlinedIcon fontSize='medium'/></span>
       { visibleLoc && 
         <div className=' py-3 border d-flex flex-column mt-3 text-center justify-content-md-center rounded ' style={{"zIndex":"100","position":"absolute", "width":"170px","marginLeft":"-16px","backgroundColor":"#f3f8f4"}}>
          <li className=" text-white m-2 py-1 col rounded" style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{e.preventDefault(); currentLocation();}}>
                 <a href="" className='fs-6 text-white'>
                  <span><LocationOnOutlinedIcon fontSize='small' sx={{"marginRight":"3px"}}/></span>Current Location</a> 
           </li>
          <li className=" text-white m-2 py-1 col rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{e.preventDefault(); setcurrlocation("Delhi");}}>
                 <a href="" className='fs-6 text-white'>Delhi</a> 
           </li>
           <li className=" text-white m-2 py-1 col rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{ e.preventDefault(); setcurrlocation("Mumbai")}}>
                 <a href="" className='fs-6 text-white'>Mumbai</a> 
           </li>
           <li className=" text-white m-2 py-1 col rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{e.preventDefault(); setcurrlocation("Kolkata")}}>
                 <a href="" className='fs-6 text-white'>Kolkata</a> 
           </li>
           <li className=" text-white m-2 py-1 col rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{e.preventDefault(); setcurrlocation("Bangalore")}}>
                 <a href="" className='fs-6 text-white'>Bangalore</a> 
           </li>
           <li className=" text-white m-2 py-1 col rounded  " style={{"list-style-type":"none","overflow":"hidden","backgroundColor":"#23b09b"}} onClick={(e)=>{e.preventDefault(); setcurrlocation("Hyderabad")}}>
                 <a href="" className='fs-6 text-white'>Hyderabad</a> 
           </li>
         </div>
         
        }
        </button>
        </div>

    
    {/* <div className='py-2'>
      <button className='p-2 text-light fs-5 rounded border border-none' style={{"backgroundColor":"#27AE9A"}} onClick={currentLocation} >
       <span className='me-2 align-text-bottom'><LocationOnOutlinedIcon fontSize='medium'/></span>
       <span> Your Location </span> 
       <span><KeyboardArrowDownOutlinedIcon fontSize='medium'/></span>
      </button>
    </div> */}
    </div>
        
    </>
  )
}

export default Navbar



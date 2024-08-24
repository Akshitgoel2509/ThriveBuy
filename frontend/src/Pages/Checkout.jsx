// import React from 'react'
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Checkout = () => {

  const [details, setdetails] = useState({name:"",address:"",city:"",code:"",state:"",country:""})

  const handleSubmit=async()=>{
    // alert("Order Placed Successfully");
    const userEmail=localStorage.getItem("userEmail");
    const response=await fetch("https://localhost:4000/api/billingData",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:details.name,
        location:details.location,
      })
    })

  }

  const handleChange=(e)=>{
    
    setdetails({...details,[e.target.name]:e.target.value});

  }



    const [summary, setSummary] = useState({
        sum:true,
        dly:true,
        pay:true,
        opt:true,
      });


  return (
    <>
      <Navbar/>
      <div className="mx-5 mb-5 ">
      <div className="row border mx-3 py-3 rounded-bottom" >
        <div className="col fw-bold fs-5">Checkout</div>
        <div className="col text-end"><Link to="/" className="text-dark pe-1">Home</Link><span style={{"color":"#29ae9a"}}> {"> "}  Checkout </span></div>
      </div>
     </div>

     <div>
      <div className='m-5 d-flex '>
        <div className='leftContainer px-1' style={{width:"30%"}}>
            
          <div className='mx-3 py-2 px-3 rounded border'>
            <div className=" d-flex justify-content-between ">
              <span className=' fs-4 '>Summary </span>
            <button className='bg-white border-0' onClick={()=>{setSummary({...summary,sum:!(summary.sum)})}}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
            {summary.sum &&
            <>

          <div className='pt-1' > 
          <div className=' border-bottom pb-1'>
            <div className="d-flex justify-content-between mt-2"><span className=' border-0 bg-white '>Sub-Total :</span><span className='border-0 bg-white'>{"$300"}</span></div>
            <div className="d-flex justify-content-between"><span className=' border-0 bg-white '>Delivery :</span><span className='border-0 bg-white'>{"$40"}</span></div>
          </div>
          <div className="d-flex justify-content-between py-1"><span className=' border-0 bg-white '>Total :</span><span className='border-0 bg-white'>{"$340"}</span></div>
        </div>
            </>
            }
          </div>


          <div className='m-3 py-2 px-3 rounded border '>  
            <div className=" d-flex justify-content-between ">
              <span className=' fs-4 '>Delivery Method </span>
            <button className='bg-white border-0' onClick={()=>{setSummary({...summary,dly:!(summary.dly)})}}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
            {summary.dly &&
            <>
            <div className=" text-black-50" style={{fontSize:"14px"}}>Please select the preferred shipping method to use on this order.</div>
            <div className="d-flex pt-3 ">
                <div className="col-6">
                    <div>Free Shipping</div>
                    {/* <div className="py-2">Rate - $0.00</div> */}
                    <div className="form-check py-2">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label className="form-check-label" for="flexRadioDefault2">
                       Rate - $0.00
                      </label>
                    </div>
                </div>
                <div className="col-6">
                    <div>Flat Rate</div>
                    {/* <div className="py-2">Rate - $5.00</div> */}
                    <div className="form-check py-2">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" for="flexRadioDefault2">
                       Rate - $5.00
                      </label>
                    </div>
                </div>
            </div>
            <div>Add Comments About Your Order</div>
                <textarea name="" id="" cols="36" rows="3" placeholder="Comments"></textarea>
            </>
            }
          </div>

          <div className='m-3 py-2 px-3 rounded border '>  
            <div className=" d-flex justify-content-between ">
              <span className=' fs-4 '>Payment Method </span>
            <button className='bg-white border-0' onClick={()=>{setSummary({...summary,pay:!(summary.pay)})}}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
            {summary.pay &&
            <>
            <div className=" text-black-50" style={{fontSize:"14px"}}>Please select the preferred payment method to use on this order.</div>
            <div className="d-flex py-2 ">
                <div className="col-12">
                    <div className="form-check py-2">
                     <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault3" checked/>
                      <label className="form-check-label" for="flexRadioDefault3">
                       Cash On Delivery
                      </label>
                    </div>
                </div>
            </div>
            <div>Add Comments About Your Order</div>
                <textarea name="" id="" cols="36" rows="3" placeholder="Comments"></textarea>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" for="flexCheckChecked">
                I have read and agree to the <span className="fw-bold">Terms & Conditions.</span>
                 </label>
                </div>

            </>
            }
          </div>

          <div className='m-3 py-2 px-3 rounded border '>  
            <div className=" d-flex justify-content-between ">
              <span className=' fs-4 '>Payment Options </span>
            <button className='bg-white border-0' onClick={()=>{setSummary({...summary,opt:!(summary.opt)})}}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
            {summary.opt && 
                <>
                <div><img className="w-100" src="https://help.zazzle.com/hc/article_attachments/360010513393" alt="" /></div>
                </>
            }
          </div>

        </div>


        <div className='rightContainer' style={{width:"70%"}}>
          <div className='px-3'>
          <div className='ms-3 py-2 px-3 rounded border '>  
              <div className=' fs-4 '>Billing Details  </div>
              
              <div className="mt-3">Checkout Options</div>
              <div className="d-flex ">
                    <span className="form-check py-2 ">
                     <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" checked/>
                      <label className="form-check-label" for="flexRadioDefault2">
                       I want to use an new address
                      </label>
                    </span>
                    <span className="form-check py-2 mx-5">
                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" />
                      <label className="form-check-label" for="flexRadioDefault2">
                      I want to use an existing address
                      </label>
                     </span>

              </div>
              <div className=" d-flex flex-column align-items-center mb-3 mt-4  ">

                     <form className="border border-2 p-4 rounded w-100 " onSubmit={handleSubmit}>
                     <div className="mb-3">
   
                        <label htmlFor="exampleInputName1" className="form-label fw-bold"> Name</label>
                       <input type="text" name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={details.name} onChange={handleChange}/>
                     </div>

                      <div className="mb-3 ">
                      <label htmlFor="exampleInputlocation1" className="form-label fw-bold">Address</label>
                      <input type="text" name="location" className="form-control" id="exampleInputlocation1" value={details.location} onChange={handleChange}/>
                      </div>

                      <div className="mb-3 d-flex ">
                        <div className="w-50 pe-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-bold">City</label>
                      <input type="email" name="email" className="form-control " id="exampleInputEmail1" value={details.city} onChange={handleChange}/>
                      </div>
                      <div className="w-50 ps-3">
                       <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Post Code</label>
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={details.code} onChange={handleChange}/>
                      </div>
                      </div>

                      <div className="mb-3 d-flex ">
                        <div className="w-50 pe-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Region/State</label>
                      <input type="email" name="email" className="form-control " id="exampleInputEmail1" value={details.city} onChange={handleChange}/>
                      </div>
                      <div className="w-50 ps-3">
                       <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Country</label>
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" value={details.code} onChange={handleChange}/>
                      </div>
                      </div>


                      </form>
                      </div>

              <div className=" mb-2 pe-1 " style={{height:"40px"}}><button className="border-0 rounded text-white p-2 position-relative " style={{"backgroundColor":"#27ae9a", float:"right"}}>Place Order</button></div>
          </div>

          </div>
          
        </div>
          
      </div>
     </div>
     

      <Footer/>
    </>
  )
}

export default Checkout

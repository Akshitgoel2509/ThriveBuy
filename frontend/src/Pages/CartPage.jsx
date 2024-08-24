// import React from 'react'
import { useState  } from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {useSelector} from 'react-redux'
import Delete from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cart=useSelector((state)=>state.product.product);
  const navigate=useNavigate();
  console.log(cart)
  const [summary, setSummary] = useState({
    sum:true,
    est:false,
  });
  const handleShopping=()=>{
    navigate("/shop")
  }
  const handleCheckout=()=>{
    navigate("/checkout")
  }
  console.log(summary.sum);
  return (
    <>
    <Navbar/>
    <div className="mx-5 mb-5 ">
      <div className="row border mx-3 py-3 rounded-bottom" >
        <div className="col fw-bold fs-5">Cart Page</div>
        <div className="col text-end"><Link to="/" className="text-dark pe-1">Home</Link><span style={{"color":"#29ae9a"}}> {"> "}  Cart Page</span></div>
      </div>
     </div>

     <div>
      <div className='m-5 d-flex '>
        <div className='leftContainer px-1' style={{width:"30%"}}>
          <div className='mx-3 py-2 px-3 rounded border'>
            <div className=" d-flex justify-content-between ">
              <span className=' fs-3 '>Summary </span>
            <button className='bg-white border-0' onClick={()=>{setSummary({...summary,sum:!(summary.sum)})}}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
            {summary.sum &&
            <>
            <div className='  d-flex justify-content-between fs-5 border-bottom ' onClick={()=>{setSummary({...summary,est:!(summary.est)})}}>
             Estimate Shipping <KeyboardArrowDownOutlinedIcon sx={{marginRight:"6px",fontSize:"23px"}} />
            </div>
            
            { summary.est &&
            <div className='pt-2 text-black-50' style={{fontSize:"15px"}}>Shipping will depend on order to order</div>
            }

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
        </div>
        <div className='rightContainer' style={{width:"70%"}}>
          <div className='px-3'>
          <table className='table '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Product</th>
              <th scope='col' >Price</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,index)=>(
            <tr key={index} className='fs-6'>
              <td >{index+1}</td>
              <td className='fs-5 py-2'><img src={item.images[0]} alt="1" style={{maxHeight:"65px", marginRight:"20px"}} />{item.title}</td>
              <td >{"$"+item.price}</td>
              <td >{item.size.itemNo}</td>
              <td >{"$"+ (item.size.itemNo*item.price)}</td>
              <td ><button className='border-0 bg-white'><Delete/></button></td>
            </tr>
            ))}
          </tbody>
          </table>
          </div>
          <div className='d-flex justify-content-between'>
            <span className='text-decoration-underline pt-2 mx-3' onClick={handleShopping}>Continue Shopping</span>
             <button className='btn rounded px-3 fs-6 fw-bold text-white py-2 mt-0 me-3' style={{backgroundColor:"#27ae9a"}} onClick={handleCheckout}>Check Out</button>
          </div> 
          
        </div>

      </div>
     </div>

     <Footer/>
     </>
  )
}

export default CartPage

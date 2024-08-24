import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateItemNo } from './productSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const cart = useSelector((state) => state.product);
  // console.log(cart.product[cart.product.length-1].size.itemNo);
  const [itemNo, setitemNo] = useState(cart.product.length !== 0 ? cart.product[cart.product.length - 1].size.itemNo : 1);
  

  const viewcartHandle=()=>{
    navigate('/cart');
  }
  return (
    <>
      {
      cart.product.length!=0?
      <> 
      <div style={{"overflowY":"auto",maxHeight:"60%"}}>
      {[...cart.product].map((product,index)=> {
            console.log(`Rendering product ${index}:`, product); // Check if map() is being called
            
      return(
      <div key={index} className=' position-relative'>
         <div className='container border p-2 d-flex '>
          <div className='leftSide' style={{'width':"30%"}}><img src={product.images[0]} style={{"width":"100%","height":"100px","objectFit":"contain" }} alt="" /></div>
          <div className='rightSide position-relative' style={{'width':"70%"}}>
            <div className='d-flex ps-1 '>
              <span style={{width:"80%"}}>{product.title}</span> 
              <span className="bg-white border border-white position-absolute top-0 end-0 px-1 ">x</span>
              </div>
              <div className="ps-1">{"$ "+product.price + " x1"}</div>
              <button className='border border-2 rounded m-1  ' style={{"backgroundColor":"white"}}>
                  <button className='mx-1 border-0' style={{"backgroundColor":"white"}}  onClick={()=>{if(itemNo>1){setitemNo(itemNo-1)}; dispatch(updateItemNo(...product,itemNo))}}>{"-"}</button>
                  <span className='mx-2'>{itemNo}</span>
                  <button className="mx-1 border-0 fw-bold " style={{"backgroundColor":"white"}} onClick={()=>{setitemNo(itemNo+1)}}>{"+"}</button>
                </button>
          </div>
          </div>
          </div>
        )})}
        </div>
        
        <div className="p-3 w-100 position-absolute bottom-0 "> 
          <div className=' border-top px-2  '>
            <div className="d-flex justify-content-between mt-2"><button className=' border-0 bg-white '>Sub-Total :</button><button className='border-0 bg-white'>{"$300"}</button></div>
            <div className="d-flex justify-content-between"><button className=' border-0 bg-white '>Delivery :</button><button className='border-0 bg-white'>{"$40"}</button></div>
            <div className="d-flex justify-content-between"><button className=' border-0 bg-white '>Total :</button><button className='border-0 bg-white'>{"$340"}</button></div>
            <div className="d-flex justify-content-around pt-2"><button className=' px-3 bg-white rounded' onClick={viewcartHandle}>VIEW CART</button> <button className='px-3 bg-white rounded'>CHECKOUT</button></div>
          </div>
        </div>
       </>
         :
         <div className="mx-3 fs-4 px-2">No product is added</div>
      }
    </>
  )
}

export default Cart

import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux"
import { addProduct,updateProduct } from '../Component/productSlice'
// import { v4 as uuidv4 } from 'uuid';

const Product = (props) => {
  // const navigate= useNavigate();
  const cartproduct=useSelector((state)=>state.product.product)
  const dispatch=useDispatch();
  const location= useLocation();
  // console.log(location.state);
  const product = location.state?.product;
  if (!product) {
    return <div>Item not found</div>; // or render a loading state, or redirect to a 404 page
  }

  const [image, setimage] = useState(product.images[0])
  const [itemNo, setitemNo] = useState(1);
  const [color, setcolor] = useState({backgroundColor:"grey"});
 
  const mrp=Math.round((product.price*100/(100-product.discountPercentage))*100)/100

  // const rating=Math.round(product.rating);
  // console.log(rating);
 
  console.log(cartproduct);

   const starRating=Array.from({length:5},(elem,i)=>{
    let number = i+0.5;
      return(
        <span> 
          {
      number<product.rating? <FaStar className='star' />
       :
       number==product.rating?<FaStarHalfAlt className='star' />:<FaRegStar className='star' />
        }
      </span>
    )
    }
  )

  const handleCart=()=>{

    let productItem=[];
    for(const item of cartproduct){
      if(item.id===product.id){
        productItem=item;
        break;
      }
    }

    if(cartproduct.length===0)
    dispatch(addProduct({...product,size:{itemNo}})); 
  else{
    if(productItem.length===0){
      dispatch(addProduct({...product,size:{itemNo}}))
    }
    else{
      dispatch(updateProduct({...product,size:{itemNo}}))
    }
  }
  }
  
  

  
  
  return (
    <>
      <Navbar/>
      <div className="mx-5 mb-5 ">
      <div className="row border mx-3 py-3 rounded-bottom" >
        <div className="col fw-bold fs-5">Product Page</div>
        <div className="col text-end"><Link to="/" className="text-dark pe-1">Home</Link><span style={{"color":"#29ae9a"}}>{"> Product Page"} </span></div>
      </div>
     </div>

     <div>
        <div className=' mx-5 px-3 mb-5 d-flex'>
            <div className='leftContainer' style={{"width":"55%"}}>
                <div className="picture border d-flex" >
                  <div className='border col-3'>
                      {product.images.map((image)=>{
                        return <div className=' p-3' onClick={()=> setimage(image)}><img src={image} alt="" className='border rounded px-2 py-2' style={{"width":"100%","height":"102px","objectFit":"contain" }} /></div>
                      })}
                    </div> 
                    <div className='col-9' style={{"height":"inherit","top":0}} >
                      <div className="mx-2 h-100" style={{"position":"sticky"  }}>
                      <div className="m-2" style={{"position":"relative","overflow":"hidden"}} >
                      <img src={image} className='py-3' style={{"width":"100%","height":"400px","objectFit":"contain" }} />
                      </div>
                      </div>
                    </div>
                  
                </div>
            </div>
            <div className='rightContainer px-5 ' style={{"width":"45%"}}>
              <div className='text-uppercase fs-2 fw-bold'>{product.brand}</div>
              <div className='fs-4 lh-1'>{product.title}</div>
              <div className='text-black-50'>{product.category}</div>
              <div className='mb-4'>
                 {starRating}
              </div>
              
            
              <div className="d-flex justify-content-between mb-4">
              <div>
              <div className="fs-4 ">{"$ "+product.price}
              <span className='mx-3 fs-5' style={{"color":"#23b09b"}}>{"-"+product.discountPercentage+"%"}</span> 
              </div>
              <div className='text-black-50 fs-5 '>{"M.R.P : "} <span className='text-decoration-line-through'>{" $ " +mrp}</span></div>
              </div>
              <div>
              <span className='text-end fs-5'> {"SKU : "+ product.sku}</span>
              <div className='fs-5' style={{"color":"#23b09b"}}>{"IN STOCK"}</div>
              </div>
              </div>

              <div className='mb-5' style={{"fontSize":"15px" ,"fontColor":"#423e3e"}}>{product.description}</div>
              <div className=''>
                <button className='border border-2 rounded py-1 ' style={{"backgroundColor":"white"}}>
                  <button className='mx-2 fs-5 border-0' style={{"backgroundColor":"white"}}  onClick={()=>{if(itemNo>1)setitemNo(itemNo-1)}}>{"-"}</button>
                  <span className='mx-3'>{itemNo}</span>
                  <button className="mx-2 fs-6 border-0 fw-bold " style={{"backgroundColor":"white"}} onClick={()=>{setitemNo(itemNo+1)}}>{"+"}</button>
                </button>
                <button type="submit" className='mx-4 rounded py-2 px-4 text-white border-0' style={color} onMouseEnter={()=>setcolor({backgroundColor:"#27AE9A"})} onMouseLeave={() => setcolor({ backgroundColor: "grey" })} onClick={handleCart}> ADD TO CART</button>
              </div>
            </div>
        </div>
     </div>
      <Footer/>
    </>
  )
}

export default Product

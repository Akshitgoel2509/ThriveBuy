// import React from 'react'
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";


const Item_cards = (props) => {
 
  const item=props.item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', {state:{ product: item} });
  };

  const starRating=Array.from({length:5},(elem,i)=>{
    let number = i+0.5;
      return(
        <span>
        {
      number<item.rating? <FaStar className='star' />
       :
       number==item.rating?<FaStarHalfAlt className='star' />:<FaRegStar className='star' />
        }
      </span>
    )
    }
  )

  return (
    <>
      <div className="col-6 my-3 ">
      <div className="card h-100">
      <img src={item.images[0]} className="card-img-top py-2" style={{"width":"100%","height":"200px","objectFit":"contain" }} alt="..."/>
      
      <div className="card-body">
      <div className="text-sm-start fs-6 text-black-50">{item.brand}</div>
      {/* <Link to={{pathname:"/item" ,state:{item: item}}} > <h5 className="card-title">{item.title}</h5></Link> */}
      <div onClick={handleClick}>
      <h5 className="card-title mb-0">{item.title}</h5>
    </div>
    <div className='mb-2'>
                 {starRating}
              </div>
      <div className='fs-5'>{item.price+ " $"}</div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Item_cards

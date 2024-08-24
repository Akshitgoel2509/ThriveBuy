import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";

const Item_cards2 = (props) => {
  const item=props.item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', {state:{ product: item} });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
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
      <div className="col-12 my-3 "> 
      {/* <div className="card h-100">
      <img src={item.images[0]} className="card-img-top py-2" style={{"width":"100%","height":"200px","objectFit":"contain" }} alt="..."/>
      <div className="card-body">
      <div className="text-sm-start fs-6 text-black-50">{item.brand}</div>
    
      <div onClick={handleClick}>
      <h5 className="card-title">{item.title}</h5>
    </div>
      <div>{item.price+ " $"}</div>
      </div>
     </div> */}

     <div className='card d-flex flex-row h-100'>
     <div className="leftSide w-50 border">
     <img src={item.images[0]} className="card-img-top py-2" style={{"height":"250px","objectFit":"contain" }} alt="..."/>
     </div>
     <div className="rightSide w-50 border py-2" >
      <div className="card-body h-100"  >
        <div className="text-sm-start fs-6 text-black-50">{item.brand}</div>
        <div onClick={handleClick}>
       <h4 className="card-title ">{item.title}</h4>
       </div>
       <div className="card-description text-black-50 h-auto mt-3 mb-1  " style={{"fontSize":"15px"}}>{truncateText(item.description,200)}</div>
       <div className='mb-2'>
                 {starRating}
              </div>
       <div className='fs-5'>{item.price+ " $"}</div>
      </div>
     </div>
     </div>
    </div>
    </>
  )
}

export default Item_cards2

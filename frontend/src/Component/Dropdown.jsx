/* eslint-disable react/prop-types */
// import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";
import {Rate,Flex} from "antd"
import { useState} from 'react'
import {useDispatch} from "react-redux"
import { updateCategory,updatePrice,updateDiscount,updateRating } from './cartSlice';


const Dropdown = (props) => {
    const [visible, setvisible] = useState(false);
    const [val,setval]= useState(0);
    const [value, setValue] = useState(3);
    const dispatch = useDispatch();
    const [showMore, setShowMore] = useState(false);
    const [checkedCategories, setCheckedCategories] = useState([]);
     
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const dropdownList=()=>{
      switch(props.name){

        case "Category" : 

        const initialOptions = props.options.slice(0, 5); // show only 5 options initially
        const remainingOptions = props.options.slice(5); // remaining options
       
        const handleCategoryChange = (e) => {
          const value = e.target.value;
          const isChecked = e.target.checked;
          let newCheckedCategories = [...checkedCategories];
      
          if (isChecked) {
            newCheckedCategories.push(value);
          } else {
            newCheckedCategories = newCheckedCategories.filter((category) => category !== value);
          }
      
          setCheckedCategories(newCheckedCategories);
          dispatch(updateCategory(newCheckedCategories));
        };

        
        return (
          <>
         {
         initialOptions.map((option)=>(
        <div key={option}>
        <input type="checkbox" value={option} className='mx-1 my-2' onChange={handleCategoryChange} />
        <label className='mx-3'>{option}</label>
        </div>))
        }

        {
        remainingOptions.length>0 && (
          <>
          {
            !showMore && (
              <div className='d-flex justify-content-center mt-2'>
              <button className='border border-none text-white rounded rounded-3xl' style={{"backgroundColor":"#27ae9a"}} onClick={()=>{setShowMore(true)}}>Show More...</button>
              </div>
            )
          }
          {
            showMore && (
              <>
              {
              remainingOptions.map((option)=>(
                <div key={option}>
                <input type="checkbox" value={option} className='mx-1 my-2' onChange={handleCategoryChange} />
                <label className='mx-3'>{option}</label>
                </div>))
              }
             <div className='d-flex justify-content-center mt-2'>
              <button className='border border-none text-white rounded rounded-3xl' style={{"backgroundColor":"#27ae9a"}} onClick={()=>{setShowMore(false)}}>Show Less...</button>
              </div>
              </>
            )
          }
        
          </>
        )}
        </>
        )

        case "Price" :
        return (
          <>
          <div className="text-center">
           <label htmlFor="customRange3" className="form-label">{val+" $"}</label>
           </div>
           <div>
           <input type="range" className="form-range" min="0" max="10000" step="0.1" id="customRange3" value={val} onChange={(e)=>{setval(e.target.value); dispatch(updatePrice(e.target.value))}} />
          </div>
          </>
        )

        case "Discount" :
          return(
            <>
            { props.options.map((option)=>
             <div key={option}>
             <input type="checkbox" value={option} className='mx-1 my-2' onChange={(e)=>{dispatch(updateDiscount(e.target.value))}} />
             <label className='mx-3'>less than {option} </label>
             </div>
             )}

             <div>
             <input type="checkbox" value="100" className='mx-1 my-2' onChange={(e)=>{dispatch(updateDiscount(e.target.value))}} />
             <label className='mx-3'>more than 50</label>
             </div>
            </>
          )

          case "Rating" :
           
          return(
              <>
               <Flex gap="middle" vertical>
               <Rate tooltips={desc}  onChange={(value) => { setValue(value); dispatch(updateRating(value));}} value={value}  />
                {value ? <span>{desc[value - 1]}</span> : null}
               </Flex>
              </>
             )
            
  }
  }
    

  return(
    <>
      <div className="dropdown my-2 mx-2 p-2 ">
        <div className=" d-flex justify-content-between border-bottom mb-1 pb-2" >
            <span className="fs-5 ">{props.name}</span>
            <span onClick={() => setvisible(!visible)}><KeyboardArrowDownOutlinedIcon/></span>
        </div>
        <div>
            
            {visible && dropdownList()
            }
        </div>
      </div>
    </>
  )
}

export default Dropdown

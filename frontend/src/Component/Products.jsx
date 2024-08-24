// import React from 'react'
import {useState } from 'react';
import phone from '../Photos/iphone.png'
import footwear from '../Photos/shoe-making.png'
import pa from "../Photos/handball.png"
import { useDispatch,useSelector } from 'react-redux';
import { updateCategory } from './cartSlice';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const navigate=useNavigate();
    const categories=useSelector((state)=>state.cart.category);
    console.log(categories);
    const dispatch=useDispatch();
    // const [checkedCategories, setCheckedCategories] = useState([]);

    const [localCategories, setLocalCategories] = useState(categories);

    const gotoshop=(category)=>{
      // let newCheckedCategories = [...categories];
      // newCheckedCategories.push(category);
      //     console.log(newCheckedCategories)
      //     // setCheckedCategories(newCheckedCategories);
      //     dispatch(updateCategory(newCheckedCategories))
      //     navigate("/shop", { state: { item: category } });

      // const newCheckedCategories = categories.concat(category);
      // dispatch(updateCategory(newCheckedCategories));
      // navigate("/shop", { state: { item: category } });

  //     const newCheckedCategories = localCategories.concat(category);
  // setLocalCategories(newCheckedCategories);
  // dispatch(updateCategory(newCheckedCategories));
  navigate("/shop", { state: { item: category } });
    }



  return (
    <>
       <div className='my-5'>
        <div className=' container'>
          <div className='row'> 

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary '>
            <div className='text-center'>
            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-1.png" className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center'> <a href="" onClick={()=>gotoshop("mens-shirt")} name="mens-shirt"  className='icon-link link-dark'>Clothes</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>30</span>
          </div>

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary ' >
          <div className='text-center'>
            <img src={footwear} className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center' ><a href="" onClick={()=>gotoshop("mens-shoes")} name="mens-shoes" className='icon-link link-dark'>Footwear</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>36</span>
          </div>

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary' >
          <div className='text-center'>
            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-2.png" className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center' ><a href="" onClick={()=>gotoshop("mens-watches")} name="mens-watches" className='icon-link link-dark'>Watches</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>36</span>
          </div>

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary' >
          <div className='text-center'>
            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/category/c-3.png" className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center' ><a href="" onClick={()=>gotoshop("womens-dresses")} name="womens-dresses" className='icon-link link-dark'>Dresses</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>36</span>
          </div>

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary' >
          <div className='text-center'>
            <img src={phone} className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center' ><a href="" onClick={()=>gotoshop("smartphones")} name="smartphones" className='icon-link link-dark'>Smartphones</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>36</span>
          </div>

          <div className='mx-4 d-flex flex-column py-3 col bg-body-secondary' >
          <div className='text-center'>
            <img src={pa} className='mb-2' style={{"height":"40px","width":"40px"}} />
            </div>
            <span className='text-center' ><a href="" onClick={()=>gotoshop("phone-accessories")} name="phone-accessories" className='icon-link link-dark'>Phone-accessories</a></span>
            <span className='text-center text-body-secondary' style={{"fontSize":"15px"}}>36</span>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Products

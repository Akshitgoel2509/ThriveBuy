
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react"
import Dropdown from "../Component/Dropdown"
import { GrAppsRounded } from "react-icons/gr";
import { FaListUl } from "react-icons/fa";
import Item_cards from "../Component/Item_cards"
import Item_cards2 from "../Component/Item_cards2"
import { updateAllProducts } from "../Component/cartSlice"
import {useDispatch,useSelector} from "react-redux";




const ShopPage = () => {
  const cartitem=useSelector((state)=>state.cart);
  console.log(cartitem.category)
  
  const [Categories, setCategories] = useState([])
  const [list, setlist] = useState(true)

  const location=useLocation();
  const category=location.state;
  // console.log(category.item);
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const loadData=async()=>{
    setLoading(true);
//     if(category.item){
//       try {
//         let response= await fetch(`https://dummyjson.com/products/category/${category.item}`);
//         if (!response.ok) {
//           throw new Error(`Response status: ${response.status}`);
//         }
//         let data=await response.json();
//         // console.log(data);
//         dispatch(updateAllProducts(data.products));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//        //  setdata(data.products);
       
//     }else{
      try {
        let response=await fetch(`https://dummyjson.com/products?limit=200`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        let data=await response.json();
        // console.log(data);
        dispatch(updateAllProducts(data.products));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }//  setdata(data.products);
//     }
  }
  loadData()
}, [])

useEffect(() => {
  const loadCategory=async()=>{
    try {
    let response=await fetch("https://dummyjson.com/products/category-list");
    let data=await response.json();
    setCategories(data);
    }catch(error){
      console.error(error);
    }
}
loadCategory();
}, [])


console.log(cartitem);


  return(
    <>
     {loading ? (
      <div>Loading...</div>
    ) : (
      <>
     <Navbar/> 
     <div className="mx-5 mb-5 ">
      <div className="row border mx-3 py-3 rounded-bottom" >
        <div className="col fw-bold fs-5">Shop Page</div>
        <div className="col text-end"><Link to="/" className="text-dark pe-1">Home</Link><span style={{"color":"#29ae9a"}}> {"> "}  Shop Page</span></div>
      </div>
     </div>

      <div className="mx-5 mb-3 d-flex  ">
        <div className="leftContainer" style={{"width":"35%"}}>
          <div className="mx-3 py-2 border border-2 rounded ">
            <Dropdown name="Category" options={Categories} category={category}  />     
            <Dropdown name="Price" options={Categories}/> 
            <Dropdown name="Discount" options={[10,20,30,50]}/> 
            <Dropdown name="Rating" options={[1,2,3,4]}/> 
            {/* <Dropdown name="Category" options={Categories}/>  */}
          </div>
        </div>

        <div className="rightContainer w-100 " >
          <div>
            <div className="mx-2 d-flex border ">
              <div className="my-1 d-flex align-content-center w-50 " style={{"height":"45px"}}>
                <button className="mx-2 my-1 p-2 border d-flex align-items-center rounded" style={{backgroundColor:list? "#27AE9A":"white",color:list?"white":"black"}} onClick={()=>{setlist(true)}}><GrAppsRounded size="20px" sx={{}}/></button>
                <button className=" my-1 p-2 border d-flex align-items-center rounded"  style={{backgroundColor:list?"white":"#27AE9A",color:list?"black":"white"}} onClick={()=>{setlist(false)}}><FaListUl size="18px" /></button>
              </div>
              <div className="sortby w-50 d-flex justify-content-end ">
                <div className="p-2 d-flex align-items-center border"> 
                 <select style={{"border":"0"}}>
                  <option value="0" disabled style={{"border":"0"}}>Sort by</option>
                  <option value="1">Position</option>
                  <option value="2">Price: low to high</option>
                  <option value="3">Price: high to low</option>
                  <option value="4">Name: A to Z</option>
                  <option value="5">Name: Z to A</option>
                 </select>
                  </div>
                </div>
              <div>
                
              </div>
            </div>
          </div>

          {/* { list?
          <div className="container my-3">
            <div className="row  ">
             {cartitem.allProducts != null && 
                  cartitem.allProducts.map((item) => {
                    
                    return <Item_cards item={item} />
                  })
             }   
            </div>
          </div>
          : 
          <div className="container my-3">
            <div className="row ">
             {cartitem.allProducts != null && 
                  cartitem.allProducts.map((item) => {
                    // if(item.category==cartCategory)
                    return <Item_cards2 item={item} />
                  })
             }   
            </div>
          </div>
          }    */}

     <div className="container my-3">
     <div className="row">
    {cartitem.allProducts != null &&
      cartitem.allProducts
        .filter((item) => {
          // Filter by category
          if (cartitem.category.length > 0 && !cartitem.category.includes(item.category)) {
            return false;
          }

          // Filter by price
          if (item.price < parseFloat(cartitem.price)) {
            return false;
          }
          // if (priceRange.max > 0 && item.price > priceRange.max) {
          //   return false;
          // }

          // Filter by discount
          if (item.discountPercentage > parseFloat(cartitem.discount)) {
            return false;
          }
          // if (discountRange.max > 0 && item.discount > discountRange.max) {
          //   return false;
          // }

          // Filter by rating
          if (item.rating <= parseFloat(cartitem.rating) && item.rating+.5 >= parseFloat(cartitem.rating)) {
            return true;
          }
          

          return true;
        })
        .map((item) => {
          if (list) {
            return <Item_cards item={item} />;
          } else {
            return <Item_cards2 item={item} />;
          }
        })
    }
  </div>
</div>

        </div>
        </div>

     <Footer/>
     </>
    )}
    </>
  );
}

 export default ShopPage;
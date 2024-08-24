/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'

const Header = () => {
  return (
    <>
      <div className=" bg-light bg-opacity w-100 d-flex px-5 pt-1 justify-content-between ">
         <div><PhoneInTalkOutlinedIcon/> 88XX99XX00 </div>
         <div>World's Fastest Online Shopping Destination  </div> 
         <div className='pe-3' >
            <ul className='d-flex' style={{"listStyleType":"none"}}>
                <li className="mx-4" style={{"listStyleType":"none"}}><a href="#" style={{"textDecoration":"none","color":"black"}}>Track Order?</a></li>
                <li style={{"listStyleType":"none"}}><a href="#" style={{"textDecoration":"none","color":"black"}}>Help?</a></li>
            </ul>
         </div>
        </div>
    </>
  )
}

export default Header

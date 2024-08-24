/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import pic1 from '../Photos/fashion.jpg'



function CarouselFadeExample() {
  return (
    <div className='mt-3'>
        <Carousel fade>
      <Carousel.Item interval={3000}>
        <img src="https://sylvi.in/cdn/shop/articles/Top_7_Hollywood_Actors_Famous_for_Their_Dressing_Style.webp?v=1663822224" alt="pic 1" style={{"height":"90vh","objectFit":"cover","minWidth":"100%", "filter":"brightness(50%)"}}  />
        <Carousel.Caption className='top-0 '>
          <div className=' fw-bolder mt-5 pt-5 ' style={{"fontSize":"65px"}}>Men Summer <br className='pt-0'/> Collection 2024</div>
          <button className='border border-0 fw-bold rounded fs-4 px-3 py-1 mt-4'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="pic 2" style={{"height":"90vh","objectFit":"cover","minWidth":"100%","filter":"brightness(60%)"}} />
        <Carousel.Caption>
        <div className=' fw-bolder mb-4  ' style={{"fontSize":"65px"}}>Women Summer <br className='pt-0'/> Collection 2024</div>
          <button className='border border-0 fw-bold rounded fs-4 px-3 mb-5'>Shop Now</button>
          <br />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-38930-135620.jpg&fm=jpg" alt="pic3" style={{"height":"90vh","objectFit":"cover","minWidth":"100%","filter":"brightness(60%)"}} />
        <Carousel.Caption className=' position-absolute top-50 start-50 translate-middle text-start'>
        <div className='  fw-bolder mb-3  ' style={{"fontSize":"65px"}}>Upto 35% <br /> Discount on <br /> Women's Bags </div>
          <button className='border border-0 fw-bold rounded fs-4 px-3 py-1 mt-2 ms-3'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;

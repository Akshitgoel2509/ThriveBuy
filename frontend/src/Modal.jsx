import React from 'react'
// import {CSSTransition} from 'react-transition-group'
// import './Modal.css'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '0%',
  right: '0%',
  backgroundColor: 'white',
  // transform: 'translateX(0%)',
  zIndex: 1000,
  height: '100%',
  width: '25%',
  // transition: all 0.1s ease-out ,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


const Modal = ({children,onClose}) => {

  console.log(children);

  return ReactDom.createPortal (
    // <CSSTransition in={isOpen} className="modal-transition" mountOnEnter unmountOnExit timeout={3000}>
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className='d-flex justify-content-between mx-3'>
        <div className=" fs-5 mt-3 mx-2">My Cart </div>
        <button className=' mt-3 fs-5 border border-white bg-white'  onClick={onClose}> X </button> 
        </div>
        {children}
      </div>
    </>,
     document.getElementById('cart-root')
    // </CSSTransition>
  )
}

export default Modal

import React, { useState, useEffect } from 'react';
import avatar from '../../images/avatar.png';
import logo from '../../images/logo.png';
import './Nav.css'

const Nav = () => {

    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        });
    
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
    }, [])
    
  return (
    <div className={`nav ${handleShow ? "back" : '' }`}>
        <img
            className='nav__logo'
            src={logo}
            alt='Netflix Logo'/>
           
        <img
            className='nav__avatar'
            src={avatar}
            alt='Netflix Avatar'/>
      
    </div>
  )
}

export default Nav;
import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
    
        const [windowWidth,setWindowWidth] = useState(window.innerWidth);
        const [isOpen, setIsOpen] = useState(true);

        useEffect(()=>{
            const handleResize =()=>{
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return ()=>{
                window.removeEventListener('resize', handleResize);
            }
        },[]);



        if(windowWidth<=768){
                
            return (
                <nav className='nav-component'>
                    <h1>logo</h1>
                    <div                  
                    onClick={()=>setIsOpen(!isOpen)}
                    className='hamburger-button'>

                        <div className={`line ${!isOpen? 'line1': ''}`}></div>
                        <div className={`line ${!isOpen? 'line2': ''}`}></div>
                        <div className={`line ${!isOpen? 'line3': ''}`}></div>
                    </div>

                    <ul 
                    className={`navbar-container-hamburger ${isOpen? 'active': ''}`} >
                        <li
                        onClick={()=>setIsOpen(!isOpen)}
                        ><a href="#home"
                        >Home</a></li>
                        <li
                        onClick={()=>setIsOpen(!isOpen)}
                        ><a href="#service"
                        >Service</a></li>
                        <li
                        onClick={()=>setIsOpen(!isOpen)}
                        ><a href="#contact"
                        >Contact</a></li>
                    </ul>
                </nav>

         );
    }else{
        return(
         <nav className='nav-component'>
                    <h1>logo</h1>
                    <ul className='navbar-container' >
                        <li><a href="#home"
                        >Home</a></li>
                        <li><a href="#service"
                        >Service</a></li>
                        <li><a href="#contact"
                        >Contact</a></li>
                    </ul>
                </nav>

      )}

  
};

export default Nav;
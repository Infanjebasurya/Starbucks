// import React from 'react'
// import {Link} from 'react-router-dom'
// import './Nav.css'
// import image from './img/logo.png'
// import { IoSearch } from "react-icons/io5";
// import { FaRegUserCircle } from "react-icons/fa";



// const Nav=()=> {
//   return (
    
//     <div className='container'>
    
// <div className='container2'>


//   <div className='navdiv'>

//   <div  >
//        <img className='imagelog' src={image} height="40px" width="40px"></img>
//        </div>


//     <div className='Navbar'>
   
//     <Link to='/'>Home</Link>
//     <Link to='/gift'>Gift</Link>
//     <Link to='/order'>Order</Link>
//     <Link to='/pay'>Pay</Link>
//     <Link to='/store'>Store</Link>
//     </div>  
   
   
//   </div>

// <div className='inputDiv'>

// <div className='search-wrap'>
//     <input className='search'  type='text'  placeholder='             Lookingfor something specific?' ></input>
//     <IoSearch className='search-icon' /> 
//     <FaRegUserCircle className='user'/>

//  </div>
// {/* 
//  <div className='user1'>
//  <FaRegUserCircle/>
//  </div> */}
// </div>

    

// </div>

       
   

//     </div>
    
    

//   )
// }

// export default Nav


import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import image from '../Components/Assets/Image/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='container'>
      <div className='container2'>
        <div className='navdiv'>
          <div>
            <img className='imagelog' src={image} alt="Logo" height="40px" width="40px" />
          </div>
          <nav className='Navbar'>
            <Link to='/'>Home</Link>
            <Link to='/gift'>Gift</Link>
            <Link to='/order'>Order</Link>
            <Link to='/pay'>Pay</Link>
            <Link to='/store'>Store</Link>
          </nav>
        </div>

        <div className='inputDiv'>
          <div className='search-wrap'>
            <input className='search' type='text' placeholder='Looking for something specific?' />
            <IoSearch className='search-icon' />
           <Link to='./Account'> 
           <FaRegUserCircle className='user' />
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

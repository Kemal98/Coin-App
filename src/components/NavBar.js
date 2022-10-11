import React, { useState } from 'react'
// import {FaCoins} from 'react-icon/fa'
import { Link } from 'react-router-dom'
const NavBar = () => {

  return (

 <Link  to='/' className='navbare text-link'>
  <h1>Coin <span className='purple'>Search</span></h1>
    <ul>      
        <li>COIN LIST</li>
        <li><Link className='text-link' to="/statistics">COIN STATISTICS</Link></li>
    </ul>
  
  </Link>
  )
}

export default NavBar
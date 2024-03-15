import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import ToggleUser from './ToggleUser'
const Header = () => {


  
 
  return (
 <header>
    <div className='header-container'>
      <Link to='/'>
      <h1 className='logo'>threaddit</h1>
      </Link>
      <input className='search-bar'
      type='text'
      placeholder='search'
      />
    
      <Dropdown />
      <ToggleUser />


      <hr />  
      
    </div>
  </header>
  )
}

export default Header
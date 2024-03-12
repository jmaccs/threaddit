import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
 <header>
    <div className='header-container'>
      <Link to='/'>
      <h1>threaddit</h1>
      </Link>
      <input className='search-bar'
      type='text'
      placeholder='search'
      />
      <hr />  
      
    </div>
  </header>
  )
}

export default Header
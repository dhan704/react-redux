import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Headers() {
  return (
    <div>
    <div className='headerDiv'>
      <NavLink to="/"><span>Home</span></NavLink>
      <NavLink to="settings"><span>Settings</span></NavLink>
      <NavLink to="counter"><span>Counter</span></NavLink>
    </div>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default Headers

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// import LogoImg from '../assets/logo1.png'

const appName = "Weather App"

function CTA({content}) {
    return (
            <button className='rounded-2xl bg-[#747264] px-4 font-light h-[60%] duration-100 hover:scale-105'>
                {content}
            </button> 
    )
}


function Navbar() {
  
  return (
    <>
      <div className={`bg-[#3C3633] flex items-center justify-around text-white h-14  w-screen `} 
      >
        <Link to={"/"} >
          LOGO
        </Link>
        <ul className='flex w-2/4 justify-center gap-20'>
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-white font-bold`: `text-[#E0CCBE]`}`
              )}>
              Home
            </NavLink>

          </li>
          <li> 
          <NavLink to={'/Browse'}
          className={({isActive})=>(
            `${isActive? `text-white font-bold`: `text-[#E0CCBE]`}`
            )}>
              Browse
          </NavLink>

          </li>
          
            </ul>
        <Link to={'/UserProfile'} className='text-white h-full flex items-center'>
            <CTA content="Profile"/>
        </Link>
      </div>
    </>
  )
}

export default Navbar
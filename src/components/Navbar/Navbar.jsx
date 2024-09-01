import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// import LogoImg from '../assets/logo1.png'

const appName = "Weather App"

function CTA({content}) {
    return (
            <button className='rounded-2xl bg-red-600 px-4 font-light h-[60%] duration-100 hover:scale-105'>
                {content}
            </button> 
    )
}


function Navbar() {
  
  return (
    <>
      <div className={`bg-black flex items-center justify-around text-white h-14 fixed w-screen `} 
      >
        <Link to={"/"} >
          <img  className='h-14'/>
        </Link>
        <ul className='flex w-2/4 justify-center gap-20'>
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-red-500 font-bold`: `text-white`}`
              )}>
              Home
            </NavLink>

          </li>
          <li> 
          <NavLink to={'/Browse'}
          className={({isActive})=>(
            `${isActive? `text-red-500 font-bold`: `text-white`}`
            )}>
              Browse
          </NavLink>

          </li>
          
            </ul>
        <Link to={'/Login'} className='text-white h-full flex items-center'>
            <CTA content="Login"/>
        </Link>
      </div>
    </>
  )
}

export default Navbar
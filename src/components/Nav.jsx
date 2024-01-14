import React, { useEffect, useState } from 'react'
import logo from "../assets/netlfix-logo.png"
const Nav = () => {
  const[show , setshow] = useState(false);
  
  const NavBar = () =>{
    if(window.scrollY > 100 ){
      setshow(true);
    }
    else{
      setshow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',NavBar)
    return () => window.removeEventListener('scroll',NavBar)
  },[])
  return (
    <nav className={` fixed top-0 ${show && `bg-black`} w-[100%] p-8 z-[1] h-[30px] transition duration-200 `} >
        <div className=' flex justify-between items-center align-middle'>
        <img className='  hover:cursor-pointer fixed left-0 w-[95px]' src={logo} alt="Netflix-logo" />
        <img className='  p-3 hover:cursor-pointer fixed right-5 w-[75px] rounded-sm' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar-logo" />
        </div>
    </nav>
  )
}
export default Nav

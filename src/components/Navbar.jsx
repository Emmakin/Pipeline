import React from 'react'
import flow from ".././assets/flow.svg"
import home from "../assets/Home.svg"
import profile from ".././assets/profile.svg"


const Navbar = () => {
  return (
    <nav className="bg-white text-center border border-blue-100 flex justify-between bottom-0 left-0 h-30 p-8 fixed w-full">
        <button className='hover:bg-blue-700'><img src={home} className="max-fit fill-none" alt= "Home button"/></button>
        <button className='hover:bg-blue-700'><img src={flow} className="max-fit fill-none" alt="flow button"/></button>
        <button className='hover:bg-blue-700'><img src={profile} className="max-fit fill-none"alt= "profile button" /></button>
    </nav>
  )
}

export default Navbar
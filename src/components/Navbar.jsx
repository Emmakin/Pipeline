import React from 'react'
import flow from "../assets/flow.svg"
import home from "../assets/Home.svg"
import profile from "../assets/profle.svg"


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-center bottom-0 h-4 fixed w-full">
     <div><img src={home} alt= "Home button"/></div>
     <div><img src={flow} alt= "flow button"/></div>
     <div><img src={profile} alt= "profile button"/></div>
     Navbar
    </nav>
  )
}

export default Navbar
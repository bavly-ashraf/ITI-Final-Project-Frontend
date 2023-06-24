import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
<>
<div className='begin'></div>
<footer className="footer p-10 text-black">
  <div>
    <span className=" font-bold text-black">FURNITURE</span> 

    <Link className="cursor-pointer hover:text-gray-500">Living Room</Link>
    <Link className="cursor-pointer hover:text-gray-500">Bedroom</Link>
    <Link className="cursor-pointer hover:text-gray-500">Dining</Link>
    <Link className="cursor-pointer hover:text-gray-500">Home office</Link>
    <Link className="cursor-pointer hover:text-gray-500">Lightning</Link>
    <Link className="cursor-pointer hover:text-gray-500">Outdoor</Link>

 

  </div> 
  <div>
    <span className="font-bold text-black">ABOUT</span> 
    <Link className="cursor-pointer hover:text-gray-500">About us</Link>
    <Link className="cursor-pointer hover:text-gray-500">Contact</Link>

  </div> 
  <div>
    <span className="font-bold text-black">Legal</span> 
    <Link className="cursor-pointer hover:text-gray-500">Terms</Link>
    <Link className="cursor-pointer hover:text-gray-500">Privacy policy</Link>
  </div>
  
</footer>
</>

    )
  }
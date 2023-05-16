import React, {useState} from 'react'
import Sidebar from './Sidebar'
import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"

const Navbar = () => {

    
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
             <h1 className={nav? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
    </ul>
    <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={20}/>
        <BsPerson size={20}/>
    </div>
<Sidebar nav={nav} handleNav={handleNav}/>
    </div>
  )
}

export default Navbar
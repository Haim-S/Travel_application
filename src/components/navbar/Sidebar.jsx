import React from 'react'

import {AiOutlineClose} from "react-icons/ai"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Sidebar = ({nav, handleNav}) => {

   

  return (
    <>
    <div onClick={handleNav} className='md:hidden z-10'>
    {nav? <AiOutlineClose className='text-black' size={20}/>:
     <HiOutlineMenuAlt4 size={20}/>
    }
    </div>
    
    <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col': 'absolute left-[-100%]'}>
<ul>
        <h1>BEACHSE.</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destinations</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
    <div className='flex flex-col'>
        <button className='my-6'>Search</button>
        <button>Account</button>
    </div>
    <div className='flex justify-between my-6'>
        <FaFacebook className='icon'/>
        <FaTwitter className='icon'/>
        <FaYoutube className='icon'/>
        <FaPinterest className='icon'/>
        <FaInstagram className='icon'/>
    </div>
</ul>
    </div>
   
    </>
  )
}

export default Sidebar
import React from 'react'
import SeawavesVid from "../../assets/SeawavesVid.mp4"
import Search from '../common/Search'

const VideoBG = () => {
  return (
    <div className='w-full h-screen relative'>
        <video 
        className='w-full h-full object-cover' 
        src={SeawavesVid} 
        autoPlay 
        loop 
        muted
        />
        <Search/>
    </div>
  )
}

export default VideoBG
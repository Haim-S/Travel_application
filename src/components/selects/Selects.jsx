import React from 'react'
import SelectsCard from '../common/SelectsCard';

import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives3.jpg";
import keywest from "../../assets/keywest.jpg";


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectsCard bg={borabora} text='Bora Bora'/>
       <SelectsCard bg={borabora2} text='Bora Bora2'/>
       <SelectsCard bg={maldives} text='Maldives'/>
       <SelectsCard bg={maldives2} text='Maldives2'/>
       <SelectsCard bg={maldives3} text='Maldives3'/>
       <SelectsCard bg={keywest} text='Keywest'/>
    </div>
  )
}

export default Selects
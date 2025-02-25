import React from 'react'
import { BODY_IMG } from '../utils/constants'

const Body = () => {
  return (
    <div className='z-0'>
        <img src={BODY_IMG} className="w-screen absolute" alt="bg-wallpaper"/>
    </div>
  )
}

export default Body
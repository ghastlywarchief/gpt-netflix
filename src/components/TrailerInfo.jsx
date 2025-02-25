import React from 'react'

const TrailerInfo = ({movie}) => {

    const {title, overview} = movie;

  return (
    <div className='absolute py-[13%] px-[6%] bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='text-xl w-[40%] text-white py-8'>{overview}</p>
        <div className="">
            <button className='bg-white text-black px-14 py-4 font-bold mx-4 rounded-lg hover:bg-opacity-70'>Play</button>
            <button className='bg-gray-500 text-white px-14 py-4 font-bold mx-4 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default TrailerInfo
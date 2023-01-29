/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Newsletter() {
  return (
    <div className=' h-60 w-full flex justify-center flex-col items-center  ' style={{background:"#fcf5f5"}}>
        <p className='text-3xl mb-1'>Newsletter</p>
        <p className='text-lg mb-1'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
        <div className='mb-1 bg-white flex justify-between border min-w-[40vw]' >
            <input placeholder='Your Email 'className=' text-sm  p-3 w-full ' ></input>
            <button className=' bg-indigo-400 ml-2 border  p-3 rounded'>Send</button>
        </div>
    </div>
  )
}

export default Newsletter
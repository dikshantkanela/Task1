import React from 'react'
import ends from '../assets/ends.png'
const End = () => {
  return (
    <div className='bg-[#F7FDFF] h-[662px] flex flex-col p-[100px]'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl font-semibold'>Your <span className='text-[#8064A2] '>Hobby</span>, Your <span className='text-[#0096C8]'>Community...</span></h2>
        <button className="bg-[#8064A2] hover:bg-purple-800 text-white font-medium  mt-4 py-2 px-4 w-[150px] rounded">
      Get Started
    </button>
      </div>
      <img className='mt-[100px]' src={ends} alt="" />
    </div>
  )
}

export default End

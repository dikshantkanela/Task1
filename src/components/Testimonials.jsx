import React from 'react'
import dancer from '../assets/dancer.png'
import quote from '../assets/quote.png'
import audio from '../assets/audio.png'
const Testimonials = () => {
  return (
    <div className='bg-[#F7F5F9] h-[472px] mx-[50px] my-[100px] p-[30px]'>
      <div className='flex flex-col gap-8'>
       <div className="flex flex-row gap-5 items-center">
       <img src={quote} className='w-[25px]' alt="" />
        <h2>Testimonials</h2>
       </div>
       
        <p className='text-gray-500'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        <div></div>
        <div className='flex flex-row'>
        <img src={audio} className='h-[100px] w-[776px]' alt="" /><img src={dancer} className='w-[304px] h-[100px]' alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default Testimonials

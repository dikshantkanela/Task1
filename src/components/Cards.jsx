import React from 'react'

import tick from '../assets/tick.png'
import product from '../assets/product.png'
import groups from '../assets/groups.png'
import place from '../assets/place.png'
const Cards = () => {
  return (
    <div className='py-[80px] flex items-center justify-center h-screen'>
       <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
      <a href="#" className="block max-w-sm p-6 w-[608px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex items-center">

        <img src={groups} alt="" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight mt-3 ml-5 text-gray-900 dark:text-white">
        People
      </h5>
        </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
      </p>
      <button type="button" class="py-2 px-8 me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Sign In</button>

    </a>
      </div>
      <div className="col-span-1">
      <a href="#" className="block max-w-sm p-6 w-[608px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="flex items-center">
    <img src={place} alt="" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight  mt-3 ml-5 text-gray-900 dark:text-white">
        Place
      </h5>
        </div> 
        
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
      </p>
      <button type="button" class="py-2 px-8 me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Sign In</button>

    </a>
      </div>
      <div className="col-span-1">
       
      <a href="#" className="block max-w-sm p-6 w-[608px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex items-center">
         <img src={product} alt="" />
      <h5 className="mb-2 text-2xl  mt-3 ml-5 font-bold tracking-tight text-gray-900 dark:text-white">
        Product
      </h5>
        </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Find equipment or supplies required for your hobby.Buy, rent or borrow from shops, online stores or from community members.
      </p>
      <button type="button" class="py-2 px-8 me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Sign In</button>

    </a>
      </div>
      <div className="col-span-1">
     <a href="#" className="block max-w-sm p-6 h-[269px] w-[608px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
     <div className="flex items-center">
     <img src={tick} alt="" />
      <h5 className="mb-2  mt-3 ml-5 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
        Program
      </h5>
        </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Find events, meetups and workshops related to your hobby. Register or buy tickets online.
      </p>
      <button type="button" class="py-2 px-8 me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Sign In</button>

    </a>
      </div>
    </div>
    </div>
  )
}

export default Cards

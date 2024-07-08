import React from 'react'
import plus from '../assets/plus.png'

const Add = () => {
  return (
    <div className='bg-[#F7FDFF] h-[484px]   flex justify-center items-center'>
      <div className="flex flex-col gap-10 border rounded-md p-10  bg-white h-[284px] w-[1240px]">
   <div className="flex gap-3 items-center">
   <img src={plus} className='w-[30px]' alt="" /><span className='font-bold text-xl'>Add your own</span>
   </div>
   <p className='text-md'>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
   <button type="button" class="py-2 w-[100px] me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Add new</button>
      </div>
    </div>
  )
}

export default Add

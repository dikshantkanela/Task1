import React from 'react'
import group56 from '../assets/Group 56.png'
import group57 from '../assets/Group 57.png'
import group58 from '../assets/Group 58.png'
import group59 from '../assets/Group 59.png'
import group60 from '../assets/Group 60.png'
import group61 from '../assets/Group 61.png'
import group62 from '../assets/Group 62.png'
import group63 from '../assets/Group 63.png'
const Footer = () => {
  return (
    <div>

<div className='flex flex-row p-10 justify-center '>
        <div className="flex flex-row gap-[140px]">
        
      <ul>
      <h3 className='font-bold mb-4'>Hobbycue</h3>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Work with us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
      <ul>
      <h3 className='font-bold mb-4'>How do I</h3>
        <li>Sign Up</li>
        <li>Add a listing</li>
        <li>Claim listing </li>
        <li>Post a Query</li>
        <li>Add a Blog Post </li>
        <li>Other Queries </li>
      </ul>
      <ul>
      <h3 className='font-bold mb-4'>Quick Links</h3>
        <li>Lisiting</li>
        <li>Blog Posts</li>
        <li>Shop / Store</li>
        <li>Community</li>
    
      </ul>
      <div className='flex flex-col'>
      <h3 className='font-bold mb-4'>Social Media</h3>
      <div className="flex flex-row gap-5 mt-4">
    <img src={group60} alt="" /><img src={group61} alt="" /><img src={group62}alt="" /><img src={group63} alt="" /><img src={group59} alt="" /><img src={group58} alt="" /><img src={group57} alt="" /><img src={group56}alt="" />
      </div>
     <h3 className='mt-7 font-semibold'>Invite Friends</h3>
   <div className="flex">
   <input
            type="search"
            id="search-dropdown"
            className="block border border-purple-700 p-2.5 w-72 text-sm text-gray-900 bg-gray-50 rounded-l-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Email ID"
            required
          />
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-white bg-[#8064A2] rounded-r-lg  hover:bg-[#6f5394] focus:ring-4 focus:outline-none focus:ring-[#a394c2] dark:bg-[#8064A2] dark:hover:bg-[#6f5394] dark:focus:ring-[#a394c2]"
          >
            
           Invite
          </button>   
    </div>     </div>
    </div>

        </div>
    <div className='bg-[#F7F5F9] h-[78px] flex justify-center items-center'>
        <h2 className='font-semibold'>&copy; Purple Cues Private Limited
</h2>
    </div>
    </div>
   
    
  )
}

export default Footer

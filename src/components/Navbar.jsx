import React, { useState } from 'react';
import logo from '../assets/logo.png';
import explore from '../assets/Explore.png';
import hobbies from '../assets/Hobbies.png'
import bookmark from '../assets/bookmark1.png'
import bell from '../assets/bell.png'
import product from '../assets/Product 3.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex flex-row items-center justify-between p-4">
        <img  src={logo} alt="Logo" className="h-[60px] w-[294px] mr-[-120px] ml-9" />

        <form className="max-w-lg mx-auto flex">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-72 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-md ml-[116px]"
            placeholder="Search here..."
            required
          />
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-white bg-[#8064A2] rounded-r-lg hover:bg-[#6f5394] focus:ring-4 focus:outline-none focus:ring-[#a394c2] dark:bg-[#8064A2] dark:hover:bg-[#6f5394] dark:focus:ring-[#a394c2]"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
<div className='flex flex-row justify-center items-center mr-[70px]'>  

<div className="relative">
          <button
            id="dropdownDividerButton"
            onClick={toggleDropdown}
            className="text-gray-900 bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-transparent"
            type="button"
          >
            <img src={explore} className="mr-2" alt="" />
            Explore
            <svg
              className={`w-2.5 h-2.5 ml-3 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDivider"
            className={`absolute right-0 mt-1 z-10 ${
              isOpen ? '' : 'hidden'
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
              <li>
                <a href="#" className="block px-4 py-4  dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-200">
                  People -Community
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4  dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-200">
                  Places - Venues
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4  dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-200">
                  Programs - Events
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4  dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-200">
                Products - Store
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-4  dark:hover:bg-gray-600 dark:hover:text-white border-b border-gray-200">
                Blogs
                </a>
              </li>
            </ul>
           
          </div>
        </div>
        <div className="relative">
          <button
            
            className="text-gray-900 bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-transparent"
            type="button"
          >
            <img src={hobbies} className="mr-2" alt="" />
            Hobbies
            <svg
              className={`w-2.5 h-2.5 ml-3`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

       
        </div>

<img  className= "w-[20px] h-[20px] mx-3" src={bookmark} alt="" />
<img className= "w-[20px] h-[20px]  mx-3"  src={bell} alt="" />
<img className= "w-[20px] h-[20px]  mx-3"  src={product} alt="" />

<button type="button" class="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-[#8064A2] focus:outline-none bg-white rounded-lg border border-[#8064A2] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-8">Sign In</button>



</div>
       
      </nav>
    </div>
  );
};

export default Navbar;

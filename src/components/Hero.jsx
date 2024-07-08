import React, { useState } from 'react';
import people from '../assets/people.png';
import password from '../assets/Password.png';

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showJoinSection, setShowJoinSection] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleJoinButtonClick = () => {
    setShowJoinSection(true);
  };

  return (
    <div className='master bg-[#F7F5F9] h-[648px]'>
      <div className='wrapper mx-12 flex flex-row'>
        <div className='left flex flex-col'>
          <h1 className='text-[36px] leading-[54px] italic font-bold mb-6 mt-[86px] '>
            Explore your <span className='text-[#0096C8]'>hobby</span> or{' '}
            <span className='text-[#8064A2]'>passion</span>{' '}
          </h1>
          <p className='text-[14.4px] w-[706px] h-[120px]'>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts,
            teachers, suppliers, classes, workshops, and places to practice, participate or perform.
            Your hobby may be about visual or performing arts, sports, games, gardening, model
            making, cooking, indoor or outdoor activities…
          </p>
          <p className='text-[14.4px] w-[706px] h-[60px]'>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your
            students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
          <img src={people} className='h-[216px] w-[697px] mt-[80px]' alt='' />
        </div>
        <div className='right flex flex-col h-[436px] w-[410px] mt-[86px] ml-12'>
          <div className='flex flex-row'>
            <button className='text-[#939CA3] mr-10 text-lg  hover:border-b-2 border-[#8064A2] hover:text-[#8064A2] '>
              Sign In
            </button>
            <button
              className='text-[#939CA3] text-lg hover:border-b-2 border-[#8064A2] hover:text-[#8064A2]'
              onClick={handleJoinButtonClick}
            >
              Join In
            </button>
          </div>
          {showJoinSection? (
            <div className='flex flex-col mt-4'>
              <button className='flex items-center my-7 bg-inherit border border-[#8064A2] rounded-lg px-[100px] py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                <svg
                  className='h-6 w-6 ml-[-80px] mr-[100px]'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  width='800px'
                  height='800px'
                  viewBox='-0.5 0 48 48'
                  version='1.1'
                >
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id='Icons'
                    stroke='none'
                    stroke-width='1'
                    fill='none'
                    fill-rule='evenodd'
                  >
                    <g id='Color-' transform='translate(-401.000000, -860.000000)'>
                      <g id='Google' transform='translate(401.000000, 860.000000)'>
                        <path
                          d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24 Z'
                          id='Fill-1'
                          fill='#FBBC05'
                        ></path>
                        <path
                          d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333 Z'
                          id='Fill-2'
                          fill='#EB4335'
                        ></path>
                        <path
                          d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667 Z'
                          id='Fill-3'
                          fill='#34A853'
                        ></path>
                        <path
                          d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24 Z'
                          id='Fill-4'
                          fill='#4285F4'
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className='font-bold'>Continue with Google</span>
              </button>
              <button
                href='#'
                className='flex items-center bg-inherit   border  border-[#8064A2] rounded-lg px-[100px] py-[10px] text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-facebook  ml-[-80px] mr-[100px]'
                >
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
                <span className='font-bold w-[180px] text-[13px]'>Continue with Facebook</span>
              </button>
              <div className='flex items-center justify-center mt-4'>
                <div className='border-t border-gray-300 flex-grow'></div>
                <span className='px-4 text-sm  dark:text-gray-400 font-bold text-black'>
                  Or connect with
                </span>
                <div className='border-t border-gray-300 flex-grow'></div>
              </div>
              <input
                type='email'
                id='email'
                className='bg-white mt-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Email'
              />
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='bg-white my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-gray-400'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.00008 2.66666C4.66675 2.66666 1.82008 4.73999 0.666748 7.66666C1.82008 10.5933 4.66675 12.6667 8.00008 12.6667C11.3334 12.6667 14.1801 10.5933 15.3334 7.66666C14.1801 4.73999 11.3334 2.66666 8.00008 2.66666ZM8.00008 11C6.16008 11 4.66675 9.50666 4.66675 7.66666C4.66675 5.82666 6.16008 4.33332 8.00008 4.33332C9.84008 4.33332 11.3334 5.82666 11.3334 7.66666C11.3334 9.50666 9.84008 11 8.00008 11ZM8.00008 5.66666C6.89341 5.66666 6.00008 6.55999 6.00008 7.66666C6.00008 8.77332 6.89341 9.66666 8.00008 9.66666C9.10675 9.66666 10.0001 8.77332 10.0001 7.66666C10.0001 6.55999 9.10675 5.66666 8.00008 5.66666Z'
                        fill='#6D747A'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.910417 0.15625L0.15625 0.910417L15.0896 15.8438L15.8438 15.0896L12.6302 11.876C14.8146 10.397 15.8929 8.32887 15.9073 8.30104C15.9678 8.21232 16.0001 8.10739 16 8C15.9999 7.8797 15.9592 7.76297 15.8844 7.66875C15.8288 7.5793 12.7564 2.66667 8 2.66667C6.65059 2.66667 5.43964 3.06677 4.39167 3.6375L0.910417 0.15625ZM8 4.26667C10.0619 4.26667 11.7333 5.93813 11.7333 8C11.7333 8.83838 11.4507 9.60685 10.9833 10.2292L9.83438 9.08021C10.0229 8.76379 10.1333 8.39558 10.1333 8C10.1333 6.82187 9.17813 5.86667 8 5.86667C7.60442 5.86667 7.23621 5.97707 6.91979 6.16563L5.77083 5.01667C6.39315 4.54931 7.16162 4.26667 8 4.26667ZM2.64063 4.84063C1.05555 6.17393 0.146656 7.61975 0.116667 7.66771C0.0412742 7.76207 0.000141568 7.87922 0 8C0.000105292 8.10448 0.0308933 8.20662 0.0885417 8.29375C0.0977116 8.31267 2.67671 13.3333 8 13.3333C8.98667 13.3333 9.87762 13.1592 10.6771 12.8781L9.29688 11.4969C8.89208 11.6473 8.45653 11.7333 8 11.7333C5.93813 11.7333 4.26667 10.0619 4.26667 8C4.26667 7.54347 4.35273 7.10793 4.50313 6.70313L2.64063 4.84063ZM5.87292 8.05938C5.90492 9.18844 6.81052 10.0951 7.93958 10.1271L5.87292 8.05938Z'
                        fill='#6D747A'
                      />
                    </svg>
                  )}
                </button>
              </div>
              <span className='font-semibold mt-[-17px] text-[10px] w-[100px] ml-[310px] text-gray-400'>
                Password Strength
              </span>
              <p className='text-[12px] mt-4 text-gray-400 w-[480px] pr-10   '>
                By continuing, you agree to our{' '}
                <span className='text-black font-semibold'>Terms of Service</span> and{' '}
                <span className='text-black font-semibold'>Privacy Policy.</span>
              </p>
              <button className='bg-[#8064A2] mt-5 rounded-md text-white px-[123px] py-[12px]'>
                Agree and Continue
              </button>
            </div>
          ):
          (
            <div>
                  <div className='flex flex-col mt-4'>
              <button className='flex items-center my-7 bg-inherit border border-[#8064A2] rounded-lg px-[100px] py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                <svg
                  className='h-6 w-6 ml-[-80px] mr-[100px]'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  width='800px'
                  height='800px'
                  viewBox='-0.5 0 48 48'
                  version='1.1'
                >
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id='Icons'
                    stroke='none'
                    stroke-width='1'
                    fill='none'
                    fill-rule='evenodd'
                  >
                    <g id='Color-' transform='translate(-401.000000, -860.000000)'>
                      <g id='Google' transform='translate(401.000000, 860.000000)'>
                        <path
                          d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24 Z'
                          id='Fill-1'
                          fill='#FBBC05'
                        ></path>
                        <path
                          d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333 Z'
                          id='Fill-2'
                          fill='#EB4335'
                        ></path>
                        <path
                          d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667 Z'
                          id='Fill-3'
                          fill='#34A853'
                        ></path>
                        <path
                          d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24 Z'
                          id='Fill-4'
                          fill='#4285F4'
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className='font-bold'>Continue with Google</span>
              </button>
              <button
                href='#'
                className='flex items-center bg-inherit   border  border-[#8064A2] rounded-lg px-[100px] py-[10px] text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                  className='bi bi-facebook  ml-[-80px] mr-[100px]'
                >
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
                <span className='font-bold w-[180px] text-[13px]'>Continue with Facebook</span>
              </button>
              <div className='flex items-center justify-center mt-4'>
                <div className='border-t border-gray-300 flex-grow'></div>
                <span className='px-4 text-sm  dark:text-gray-400 font-bold text-black'>
                  Or connect with
                </span>
                <div className='border-t border-gray-300 flex-grow'></div>
              </div>
              <input
                type='email'
                id='email'
                className='bg-white mt-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Email'
              />
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='bg-white my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 dark:text-gray-400'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.00008 2.66666C4.66675 2.66666 1.82008 4.73999 0.666748 7.66666C1.82008 10.5933 4.66675 12.6667 8.00008 12.6667C11.3334 12.6667 14.1801 10.5933 15.3334 7.66666C14.1801 4.73999 11.3334 2.66666 8.00008 2.66666ZM8.00008 11C6.16008 11 4.66675 9.50666 4.66675 7.66666C4.66675 5.82666 6.16008 4.33332 8.00008 4.33332C9.84008 4.33332 11.3334 5.82666 11.3334 7.66666C11.3334 9.50666 9.84008 11 8.00008 11ZM8.00008 5.66666C6.89341 5.66666 6.00008 6.55999 6.00008 7.66666C6.00008 8.77332 6.89341 9.66666 8.00008 9.66666C9.10675 9.66666 10.0001 8.77332 10.0001 7.66666C10.0001 6.55999 9.10675 5.66666 8.00008 5.66666Z'
                        fill='#6D747A'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.910417 0.15625L0.15625 0.910417L15.0896 15.8438L15.8438 15.0896L12.6302 11.876C14.8146 10.397 15.8929 8.32887 15.9073 8.30104C15.9678 8.21232 16.0001 8.10739 16 8C15.9999 7.8797 15.9592 7.76297 15.8844 7.66875C15.8288 7.5793 12.7564 2.66667 8 2.66667C6.65059 2.66667 5.43964 3.06677 4.39167 3.6375L0.910417 0.15625ZM8 4.26667C10.0619 4.26667 11.7333 5.93813 11.7333 8C11.7333 8.83838 11.4507 9.60685 10.9833 10.2292L9.83438 9.08021C10.0229 8.76379 10.1333 8.39558 10.1333 8C10.1333 6.82187 9.17813 5.86667 8 5.86667C7.60442 5.86667 7.23621 5.97707 6.91979 6.16563L5.77083 5.01667C6.39315 4.54931 7.16162 4.26667 8 4.26667ZM2.64063 4.84063C1.05555 6.17393 0.146656 7.61975 0.116667 7.66771C0.0412742 7.76207 0.000141568 7.87922 0 8C0.000105292 8.10448 0.0308933 8.20662 0.0885417 8.29375C0.0977116 8.31267 2.67671 13.3333 8 13.3333C8.98667 13.3333 9.87762 13.1592 10.6771 12.8781L9.29688 11.4969C8.89208 11.6473 8.45653 11.7333 8 11.7333C5.93813 11.7333 4.26667 10.0619 4.26667 8C4.26667 7.54347 4.35273 7.10793 4.50313 6.70313L2.64063 4.84063ZM5.87292 8.05938C5.90492 9.18844 6.81052 10.0951 7.93958 10.1271L5.87292 8.05938Z'
                        fill='#6D747A'
                      />
                    </svg>
                  )}
                </button>
              </div>
             
              <div className='flex flex-row justify-between mt-3'> <input type="checkbox" className='mr-4' /><span className='text-sm mr-[110px]'>Remember me</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_5013)">
<path d="M11.8194 5.33334H11.1628V4.00001C11.1628 2.16001 9.69193 0.666672 7.8796 0.666672C6.06727 0.666672 4.59639 2.16001 4.59639 4.00001V5.33334H3.93975C3.21744 5.33334 2.62646 5.93334 2.62646 6.66667V13.3333C2.62646 14.0667 3.21744 14.6667 3.93975 14.6667H11.8194C12.5418 14.6667 13.1327 14.0667 13.1327 13.3333V6.66667C13.1327 5.93334 12.5418 5.33334 11.8194 5.33334ZM7.8796 11.3333C7.15729 11.3333 6.56631 10.7333 6.56631 10C6.56631 9.26667 7.15729 8.66667 7.8796 8.66667C8.6019 8.66667 9.19288 9.26667 9.19288 10C9.19288 10.7333 8.6019 11.3333 7.8796 11.3333ZM5.90967 5.33334V4.00001C5.90967 2.89334 6.78957 2.00001 7.8796 2.00001C8.96962 2.00001 9.84952 2.89334 9.84952 4.00001V5.33334H5.90967Z" fill="#939CA3"/>
</g>
<defs>
<clipPath id="clip0_1_5013">
<rect width="15.7594" height="16" fill="white"/>
</clipPath>
</defs>
</svg> <span className='text-sm'>Forgot password?</span>

              </div>
           
              <button className='bg-inherit mt-5 rounded-md text-black border border-gray-950 px-[50px] py-[12px]'>
                 Continue
              </button>
            </div>
            </div>
    
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
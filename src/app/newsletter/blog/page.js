// /newsletter/page.js
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
const BlogPage = () => {
  return (
        <>
        <div className='p-4'>

              <Link href="/newsletter" className='text-white  '>
                <p className="inline-flex px-4  py-1 items-center font-semibold text-xl   rounded-md"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
</svg>
Back</p></Link>
       
            

<div className="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="w-48 h-32 mx-auto mt-4   object-cover " 
      width={128} 
      height={128} 
      src="/logo/allyours.svg" 
      alt="Logo" 
    />
  </a>

  <div className="p-5 text-left">
    <a href="#">
      <h5 className="mb-2 text-xl font-bold tracking-wider text-gray-900 dark:text-white">
        Welcome To allyours
      </h5>
    </a>
    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
    A significant milestone was made on January 11, 2025, as we proudly announced the official launch of allyours.. </p>
    <Link href="/newsletter/blog/blog-allyours" 
      
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg 
        className="w-4 h-4 ml-2 rtl:rotate-180" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 14 10"
      >
        <path 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  </div>
</div>


        </div>
        </>


  )
  
  
  
  
};

export default BlogPage; // Ensure this is the default export

import React from 'react'
import { FaSearch, FaBookmark, FaBell } from 'react-icons/fa';
import '../index.css';

function Header() {
  return (
    <nav className='grid grid-cols-3 mt-5 items-center bg-black text-gray-500	h-20 sticky'>
    <div className='flex mx-10'>
    <h1 className='text-xl font-semibold text-white'>Bloggit</h1>
    </div>
    <div className='flex items-center'>
        <ul className='flex space-x-5'>
            <li>Home</li>
            <li>Posts</li>
            <li>Mega Menu</li>
            <li>Pages</li>
            <li>Lifestyle</li>
            <li>Gadgets</li>
        </ul>
    </div>
    <div className='flex space-x-5 justify-end mr-10'>
         <div className='flex md:border-2 rounded-full py-2 md:shadow-sm'>
             <input className='pl-5 transparent outline-none flex-grow text-sm bg-transparent text-gray-400 placeholder-grey-400' type='text' placeholder='Search'></input>
                <FaSearch className='hidden md:inline-flex h-8 text-white rounded-full cursor-pointer  md:mx-2'/>
         </div>
        <div className='flex space-x-4 h-10'>
            <div className='flex rounded-full bg-white w-9 h-9'>
                <FaBookmark className=''/>
             </div>
            <div className='rounded-full bg-white w-9 h-9 items-center'>
                 <FaBell className='m-auto '/>
            </div>
        
        </div>
    </div>
        
    </nav>
  )
}

export default Header
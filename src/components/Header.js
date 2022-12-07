import React, { useState } from 'react'
import { FaSearch, FaBookmark, FaBell } from 'react-icons/fa';
import '../index.css';
import NavMenu from './NavMenu';

function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const hamburgerStyle = {
        display: `${hamburgerOpen ? 'inline' : 'none'}`
    }


  return (
    <nav className='grid lg:grid-cols-3 lg:items-center bg-black text-gray-500 h-20 sticky'>
     <div className='flex mx-10'>
        <h1 className='text-xl font-semibold text-white'>Bloggit</h1>
     </div>
     <div>
        <ul className='hidden lg:flex space-x-5 h-full w-full' >
            <li>Home</li>
            <li>Posts</li>
            <li>Technology</li>
            <li>Pages</li>
            <li>News</li>
            <li>Gadgets</li>
        </ul>
     </div>
    <div className='flex space-x-5 justify-end'>
         <div className='flex md:border-2 rounded-full py-2 md:shadow-sm'>
             <input className='pl-5 transparent outline-none flex-grow text-sm bg-transparent text-gray-400 placeholder-grey-400' type='text' placeholder='Search'></input>
                <FaSearch className='hidden md:inline-flex h-8 text-white rounded-full cursor-pointer  md:mx-2'/>
         </div>
       <div className='flex rounded-md'>
        <div className='p-3 m-1  bg-red-600 text-white hover:bg-gray-500 w-20  rounded-md text-center'>
            <button>Login</button>
        </div>
        <div className='p-3 m-1 bg-red-600 text-white hover:bg-gray-500  rounded-md text-center'>
            <button>Sign Up</button>
        </div>
       </div>
        <div className='hamburger' onClick={toggleHamburger}>
       
       </div>
        
    </div>
    <NavMenu />
    </nav>
  )
}

export default Header
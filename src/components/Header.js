import React, { useState } from 'react'
import { FaSearch, FaBookmark, FaBell } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    

  return (
    <nav className='flex items-center justify-between bg-black text-gray-300 h-24 mx-auto px-4 relative z-[100]'>
     <div className='flex mx-10'>
        <h1 className='text-3xl font-bold text-white'>EnTech.</h1>
     </div>
     <div>
        <ul className='hidden md:flex space-x-5 h-full w-full' >
            <li className='p-4'>Home</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>News</li>

        </ul>
     </div>
    <div className='lg:flex hidden space-x-5 ml-20 justify-end'>
         <div className='flex md:border-2 rounded-full py-2 md:shadow-sm'>
             <input className='pl-5 transparent outline-none flex-grow text-sm bg-transparent text-gray-400 placeholder-grey-400' type='text' placeholder='Search'></input>
                <FaSearch className='hidden md:inline-flex h-8 text-white rounded-full cursor-pointer  md:mx-2'/>
         </div>
       <div className='lg:flex hidden '>
        <div className='p-3 m-1  bg-red-600 text-white hover:bg-gray-500 w-fit  rounded-md text-center'>
            <button>Subscribe</button>
        </div>
       
       </div>  
    </div>
    <div onClick={handleNav} className='block md:hidden'>

    {!nav ? <AiOutlineClose /> :  <GiHamburgerMenu className='text-gray-600 text-3xl'/>
}

    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[200%] border-r border-r-gray-900 bg-black ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] md:hidden '}>
    <h1 className='text-3xl w-full m-4 font-bold text-white'>EnTech.</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b  border-gray-600'>Home</li>
            <li className='p-4 border-b  border-gray-600'>Resourses</li>
            <li className='p-4 border-b  border-gray-600'>About </li>
            <li className='p-4 border-b  border-gray-600'>Contact</li>
            <li className='p-4'>News</li>
        </ul>
    </div>
    </nav>
  )
}

export default Header
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

function NavMenu() {
  return (
    <>
        <div className='hamburger collapse'>
            <div className='burger burger1'></div>
            <div className='burger burger2'></div>
            <div className='burger burger3'></div>
        </div>

        <GiHamburgerMenu className='text-gray-600 text-3xl lg:collapse md:fixed md:pt-2 md:ml-2 md:z-10'/>
    </>
  )
}

export default NavMenu;
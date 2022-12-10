import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-gray-400 grid grid-cols-3 items-center'>
        <div className='ml-10 p-2 divide-y-2 divide-dotted w-96 '>
            <h1 className='text-white font-semibold text-xl mb-3'>Bloggit</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='ml-24 divide-y divide-dotted lg:w-64 hidden md:grid'>
            <h2 className='text-white font-semibold text-lg mb-3'>Links</h2>
            <ul className='cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>News</li>
            </ul>
        </div>
        <div className='h-32 md:justify-end lg:justify-center md:p-2 hidden md:grid' >
            <h2 className='text-white font-semibold text-lg'>Subscribe</h2>
            <p>Sign up to subscribe to our newsletter.</p>
            <div className='mt-2'>
            <input type='email'></input>
            <button type='submit' className='bg-red-600 text-white rounded-md ml-2 h-7 w-20'>Sign Up!</button>
            </div>
        </div>
        

    </div>
  )
}

export default Footer
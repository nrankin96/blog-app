import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-gray-400 grid grid-cols-3 h-48 items-center'>
        <div className='ml-10 divide-y-2 divide-dotted'>
            <h1 className='text-white font-semibold text-xl mb-3'>Bloggit</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        </div>
        <div className='ml-24 divide-y divide-dotted w-64'>
            <h2 className='text-white font-semibold text-lg mb-3'>Links</h2>
            <ul className='cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>News</li>
            </ul>
        </div>
        <div className='h-32 m-5 p-6'>
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
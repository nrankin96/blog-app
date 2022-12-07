import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

function BackToTopButton() {

    const [BackToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 800)
                {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  return (
    

    <div>
    {BackToTopButton && (
        <button className='fixed bottom-12 right-12 h-12 w-12' onClick={scrollUp}>
        <BsFillArrowUpCircleFill className=' text-4xl text-red-600 animate-bounce'/ >
    </button>
        
    )
        }
   </div>
  )
}

export default BackToTopButton
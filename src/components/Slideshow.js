
import { useState } from 'react';
import 'react-slideshow-image/dist/styles.css'

function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

   if (!slides || slides.length === 0 ) {
        return null;
   }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

      const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "15px",
        zIndex: 1,
        bottom: "1%",

      };
    
      const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
      const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

      const handleClick = () => {
        window.open(`${slides[currentIndex].url}`, '_blank')
      };
  
  return (
    <div className='h-full w-full relative'>
        <div>
            <div className='font-bold' style={leftArrowStyles} onClick={goToPrevious}>&lt;</div>
            <div className='font-bold' style={rightArrowStyles} onClick={goToNext}>&gt;</div>
        </div>
        <div style={{backgroundImage: `url(${slides[currentIndex].urlToImage})`}} className="w-full h-full bg-center bg-cover brightness-50	"></div>
        <div className='w-2/3  absolute inset-x-0 top-2 text-white text-center m-auto mt-24 lg:my-36 lg:mx-36' >
            <h1 className='font-semibold text-lg lg:text-3xl lg:mb-4'>{slides[currentIndex].title}</h1>
            <p className='mb-5 text-white'>{slides[currentIndex].description}</p> 
            <div className=' bg-red-600 w-48 text-center h-10 rounded-md hover:scale-105 transition 
                transform duration-300 ease-out m-auto'>
                 <button className='mt-2 cursor-pointer' onClick={handleClick} >Read More</button>
            </div>

        </div>
       
        <div className='flex justify-center absolute inset-x-0 bottom-0 text-red-600 pb-2'>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='outline-none hover:outline-white rounded-full w-6 h-6 text-center'
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow;


import { useEffect, useState } from "react";
import Card from "./Card";
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "./Slideshow";
import BackToTopButton from "./BackToTopButton";
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import SmallCard from "./SmallCard";



function Blogs() {

    const [blogs, setBlog] = useState([]);
    const [gamingBlogs, setGamingBlogs] = useState([]);
    const [newsBlogs, setNewsBlogs] = useState([]);
    const noOfFeaturedArticles = 6;
    const [next, setNext] = useState(noOfFeaturedArticles);
   

    
    const date = new Date();
    const text = date.toISOString().slice(0, 10);
    const handleMoreArticles = (e) =>{
        setNext(next + noOfFeaturedArticles)
        e.preventDefault();
    }



    const slideLeft = (e) => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 340;
        e.preventDefault()
    }

    const slideRight = (e) => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 340;
        e.preventDefault()
    }


    useEffect(() => {
        getBlogs()
    }, []);


    const getBlogs = async () => {

        const check = localStorage.getItem('blogs');
        const gamingCheck = localStorage.getItem('gaming');
        const newsCheck = localStorage.getItem('news');

        if(check && gamingCheck && newsCheck) {
            setBlog(JSON.parse(check))
            setGamingBlogs(JSON.parse(gamingCheck))
            setNewsBlogs(JSON.parse(newsCheck))
        } else {
            const [featuredData, gamingData, newsData] = await Promise.all ([fetch(`https://newsapi.org/v2/everything?q=technology&from=${text}&sortBy=popularity&language=en&pageSize=50&apiKey=${process.env.REACT_APP_API_KEY}`), 
            fetch(`https://newsapi.org/v2/everything?q=gaming&from=${text}&sortBy=popularity&language=en&pageSize=50&apiKey=${process.env.REACT_APP_API_KEY}`), fetch(`https://newsapi.org/v2/everything?q=news&from=${text}&sortBy=popularity&language=en&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`)]);
            const [featuredDataRes, gamingRes, newsDataRes] = await Promise.all([
                featuredData.json(),
                gamingData.json(),
                newsData.json()
            ]);
            localStorage.setItem('blogs', JSON.stringify([featuredDataRes.articles, gamingRes.articles, newsDataRes.articles]));
            setBlog(featuredDataRes.articles);
            setGamingBlogs(gamingRes.articles);
            setNewsBlogs(newsDataRes.articles);
            
        }

     
    }

    

   

  return (

        
        <div>

            <div className="w-full h-500">
                <div className="w-full h-500 m-auto">
                <Slideshow slides={newsBlogs}/>
             </div>
           </div>

           <div className='font-semibold text-center text-3xl m-5 relative'>
           <h1>Gaming & Technology</h1></div>
            <div className="flex">
                <BsArrowLeftCircle onClick={slideLeft} size={40} className='hover:opacity-100 hover:text-red-500 m-5 mt-20 bg-opacity-60' />
                <div id='slider' className="flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide w-full h-full mx-2 space-x-4 ">
                    {gamingBlogs.map(({title, urlToImage, url}) => {
                    return (
                        <SmallCard 
                        key={title}
                        title={title}
                        urlToImage={urlToImage}
                        url={url}
                        />
                    )
                     })} 
                     </div>
                     <BsArrowRightCircle className='hover:opacity-100 hover:text-red-500 m-5 mt-20 bg-opacity-60' onClick={slideRight} size={40} />

                </div>

                <h1 className="font-semibold text-xl m-5">Featured Stories</h1>
                <div className=" overflow-x-auto scrollbar-hide">
                {blogs?.slice(0, next).map(({title, description, url, urlToImage}) =>{
                return(
                <Card 
                    key={title}
                    title={title}
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                />
                );
                })}
                <div className="flex justify-center m-4">
                {next < blogs.length && (
                    <button className='bg-red-600 text-white rounded-md h-10 w-36 hover:scale-105 transition 
                    transform duration-200 drop-shadow-lg' onClick={handleMoreArticles}>Load More</button>

                )}
                </div>
                <BackToTopButton />

            </div>
           
          
           
        </div>


    
  )
}

export default Blogs;




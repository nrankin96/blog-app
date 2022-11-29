import { useEffect, useState } from "react";
import Card from "./Card";

function Blogs() {

    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        getBlogs()
    }, []);


    const getBlogs = async () => {

        const check = localStorage.getItem('blogs');

        if(check) {
            setBlog(JSON.parse(check))
        } else {
            const response = await fetch(`https://newsapi.org/v2/everything?q=technology&from=2022-11-26&sortBy=popularity&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            localStorage.setItem('blogs', JSON.stringify(data.articles));
            setBlog(data.articles);
        }

       
    }

    
console.log(blogs);


  return (
        <div>
            <h1 className="font-semibold text-2xl m-2">Featured Stories</h1>
            {blogs.map((articles) =>{
                return(
                    <div key={articles.id} className='m-4 flex bg-sky-600'>
                        <div className="m-5">
                            <img src={ articles.urlToImage} className='object-cover h-48 w-96'></img>
                        </div>
                        <div className="m-4 p-2 pl-5">
                            <a className="font-semibold" href={articles.url}>{articles.title}</a>
                            <p>{articles.description}</p>
                        </div>
                    </div>
                    
                   

                );
            })}
        </div>
    
  )
}

export default Blogs;

{/* <div key={articles.id} className='m-4 border border-sky-500 w-48' >
                            <img src={ articles.urlToImage}></img>
                            <h2 >{articles.title}</h2>
                             <p>{articles.description}</p>
                        </div> */}
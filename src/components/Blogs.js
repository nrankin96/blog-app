import { useEffect, useState } from "react";
import Card from "./Card";
import Gaming from "./Gaming";

function Blogs() {

    const [blogs, setBlog] = useState([]);
    const [gamingBlogs, setGamingBlogs] = useState([]);



    useEffect(() => {
        getBlogs()
    }, []);


    const getBlogs = async () => {

        const check = localStorage.getItem('blogs');
        const gamingCheck = localStorage.getItem('gaming');

        if(check) {
            setBlog(JSON.parse(check))
        } if (gamingCheck) {
            setGamingBlogs(JSON.parse(gamingCheck))
        } else {
            const [featuredData, gamingData] = await Promise.all ([fetch(`https://newsapi.org/v2/everything?q=technology&from=2022-11-26&sortBy=popularity&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`), 
            fetch(`https://newsapi.org/v2/everything?q=gaming&from=2022-11-26&sortBy=popularity&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)]);
            const [featuredDataRes, gamingRes] = await Promise.all([
                featuredData.json(),
                gamingData.json()
            ]);
            localStorage.setItem('blogs', JSON.stringify([featuredDataRes.articles, gamingRes.articles]));
            setBlog(featuredDataRes.articles);
            setGamingBlogs(gamingRes.articles);
            
        }

       
    }

    



  return (
        <section>
            <h1 className="font-semibold text-3xl m-5">Featured Stories</h1>
            <div className="overflow-y-auto h-80">
                {blogs?.map(({id, title, description, url, urlToImage, content}) =>{
                return(
                <Card 
                    key={id}
                    title={title}
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                    content={content}
                />
                );
                
            })}
            </div>
            <div className='font-semibold text-center text-3xl'>Gaming & Technology</div>
            <div className="flex flex-row overflow-x-auto">
                {gamingBlogs.map(({id, title, urlToImage, url}) => {
                    return (
                        <Gaming 
                        key={id}
                        title={title}
                        urlToImage={urlToImage}
                        url={url}
                        />
                    )

                })}
            </div>
        </section>


    
  )
}

export default Blogs;


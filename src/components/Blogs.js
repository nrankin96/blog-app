import { useEffect, useState } from "react";

function Blogs() {

    const [blog, setBlog] = useState([]);

    async function getBlogs() {
       const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-11-26&sortBy=popularity&apiKey=ce7e5dddeca149598d2e6784e5745bac`);
       const data = await response.json();
        localStorage.setItem('blogs', JSON.stringify(data));
        setBlog(data);
    }

    useEffect(() => {
        getBlogs()
    }, [blog]);

console.log(blog);


  return (
        <div className="grid-cols-2">
            <div className="bg-slate-500 w-80">
               xx
            </div>
        </div>
    
  )
}

export default Blogs;
import React from "react";


function Gaming({ title, urlToImage, url}) {

const handleClick = () => {
  window.open({url}, "_blank")
}

  return (
    <div className="m-5">
    {/* Card */}
    <div className="drop-shadow-lg w-80 h-80 rounded-md bg-slate-100	hover:bg-gray-100 hover:scale-105 transition 
      transform duration-200 ease-out cursor-pointer" onClick={handleClick}>
      <div>
        <img src={urlToImage} className="rounded-t-md object-fit w-80 h-48" alt={title}></img>
      </div>
      <div>
        <p className="font-semibold text-center m-5 text-lg">{title}</p>
      </div>
    </div>
    </div>
  )
}

export default Gaming;
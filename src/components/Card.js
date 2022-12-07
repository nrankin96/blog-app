

function Card({title, description, url, urlToImage}) {

  const handleClick = () => {
    window.open(`${url}`, '_blank')
  }


  return (
    <div className='m-4 flex mt-5 space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition 
      transform duration-200 ease-out border-b-2 rounded-t-sm' onClick={handleClick}>
      <div className="m-5 hidden md:block">
        <img src={ urlToImage} className='object-cover h-48 w-96 rounded-lg' alt={title}></img>
      </div>
      <div className=" p-2 pl-5 ">
        <a className="font-semibold text-lg " href={url}>{title}</a>
        <p className="mt-2">{description}</p>
      </div>
  </div>
  
  )
}

export default Card
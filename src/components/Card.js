

function Card({id, title, description, url, urlToImage, content}) {

 const handleClick = () => {
  window.location.replace({url})
 }


  return (
    <div className='m-4 flex mt-5 space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition 
      transform duration-200 ease-out border-b-2 rounded-t-sm' onClick={handleClick}>
      <div className="m-5 ">
        <img src={ urlToImage} className='object-cover h-48 w-96 rounded-lg' alt={title}></img>
      </div>
      <div className="m-4 p-2 pl-5 ">
        <a className="font-semibold" href={url}>{title}</a>
        <p>{description}</p>
      </div>
  </div>
  
  )
}

export default Card
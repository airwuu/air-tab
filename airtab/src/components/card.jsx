import React from 'react'

const Card = ({title, imageURL, websiteURL}) => {
  return (
    <a href={websiteURL}>
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg transition ease-in-out hover:-translate-y-0 hover:scale-105 hover:bg-gray-300 duration-300">
        <div className="flex flex-col justify-center items-center text-center w-40 h-24">
          {imageURL ? <img alt={title} className="w-14 justify-self pb-2"src={imageURL}/> :
          <p className="mt-2 text-sm text-white">Last opened 4 days ago</p>}
          <h2 className="font-semibold">{title}</h2>
        </div>
      </div>
    </a>
    
  )
}

export default Card
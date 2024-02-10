import React from 'react'
import './card_tourism.css'
const Card_tourism = ({image,TourName}) => {
  return (
    <div className='subA__card-tourism-container' >
      <div className="Card_section ">
        <img className="card-image" src={image}/>
        <div className="card-content">
          <h3 className="DescTour">{TourName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card_tourism;
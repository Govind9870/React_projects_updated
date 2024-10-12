import React from 'react'
import Govind from '../componants/Govind.jpeg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-title'>{props.name}</p>
        <img id='user-image' src={Govind} alt="Govind"/>
        <p id='user-desc'>{props.desc}</p>      
    </div>
  )
}

export default UserCard

import React from 'react'
import level from '../assets/level.svg'

export const Level = () => {
  return (
    <div className='level-container'>
      <div className="left-box">
        <p className='level-title'>Security level</p>
      </div>
      <div className="right-box">
        <img className='level-icon' src={level} alt="" />
      </div>
    </div>
  )
}

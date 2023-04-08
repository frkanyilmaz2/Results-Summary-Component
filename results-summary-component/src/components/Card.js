import React from 'react'

const Card = () => {
  return (
    <div className='card-container'>
        <h5 className='card-title'>Your result</h5>
        <div className='score'>
        <span className='big-score'>76</span>
        <p className='my-score'>of 100</p>
        </div>
        <h3 className="result-title">Great</h3>
        <p className="result-context">Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  )
}

export default Card
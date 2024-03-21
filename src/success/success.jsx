import React from 'react'
import './success.css'
import Card from '../card/card'
const Success = ( {value} ) => {
  return (
    <div className='success-card'>
        <div className="success-content">
            <img src="/assets/images/icon-success.svg" alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmatory email has been sent to <strong>{value}</strong>. Please open it and click the button inside to confirm your subscription.</p>
            <div className="success-btn">
              <button><a href={<Card />}>Dismiss message</a></button>
            </div>
        </div>
    </div>
  )
}

export default Success
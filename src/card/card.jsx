import React, { useState } from 'react'
import './card.css'
import Success from '../success/success'

const Card = ( {value, updateValue, handleSubmit, popUp, isValid}) => {
    let myArray = value.split("")

  return (
    <>
        <div className='card'>
        <div className="card-text">
            <h1>Stay updated!</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>

            <div className="card-subText">
                <span>
                    <img src="assets/images/icon-list.svg" alt="" />
                    <h4>Product discovery and building what matters</h4>
                </span>
                <span>
                    <img src="/assets/images/icon-list.svg" alt="" />
                    <h4>Measuring to ensure updates are a success</h4>
                </span>
                <span>
                    <img src="assets/images/icon-list.svg" alt="" />
                    <h4>And much more!</h4>
                </span>
            </div>
            <div className="email-input">
                <div className="pop-ups">
                    <label htmlFor="email">Email address</label>
                    {popUp === "Yes" && <small>Valid email required!</small>}
                </div>
                <br />
                <input type="email" name="email" id="email" className={popUp === "Yes" ? "pop" : "mail"} placeholder="email@company.com" onChange={updateValue} value={value}/>
            </div>
            <div className="card-btn">
                <button type='submit' onClick={handleSubmit}><a href={`mailto:${value}`}>Subscribe to monthly newsletter</a></button>
            </div>
        </div>

        <div className="card-image">
            <img src="/assets/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
    </div>
    </>
    
  )
}

export default Card
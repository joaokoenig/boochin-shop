import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ex quasi perspiciatis possimus natus nam, laboriosam ipsam, laborum sunt neque veritatis magni explicabo ratione, laudantium dolor. Et rem molestiae illo!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga odit commodi corrupti accusamus cum culpa optio soluta libero fugiat error, et excepturi perspiciatis. Sit harum beatae quis facere adipisci?</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Boochin</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved.</span>
        </div>
        <div className="right">
          <img src="images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
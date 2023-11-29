import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Be in touch with us:</span>
            <div className='mail'>
                <input type="text" placeholder='Enter your e-mail...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <PinterestIcon/>
                <GoogleIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact
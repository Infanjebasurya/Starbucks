import React from 'react'
import './Account.scss'
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';


import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";


import logo from "../Components/Assets/Image/logo.png"
import appstore from "../Components/Assets/Image/appstoreiOS.png"
import playstore from "../Components/Assets/Image/appstoreAndroid.png"


function Account() {
  return (
    <div>
      <div>

<div className='Pro-Account-Btn'>
  <button className='profilr-btn'>Profile</button>
  <button className='Account-btn'>--- Account</button>
</div>

<div className='Account'> 
  <div className='Account1'>

    <Link to='/settings'>
  <CiSettings className='Settings' />
  </Link>

  </div>
</div>

<div className='Wel'>
<h2>Welcome To Starbuck</h2>

<Link to='/login'>
<button className='Sign-up'>Login or Sign Up</button>
</Link>

</div>


<footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={logo} alt="Starbucks Logo" />
    </div>
    <div className="footer-section">
      <h4>About Us</h4>
      <ul className='fonts'>
        <li>Our Heritage</li>
        <li>Coffeehouse</li>
        <li>Our Company</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Responsibility</h4>
      <ul className='fonts'>
        <li>Diversity</li>
        <li>Community</li>
        <li>Ethical Sourcing</li>
        <li>Environmental Stewardship</li>
        <li>Learn More</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul className='fonts'>
        <li>Privacy Policy</li>
        <li>FAQs</li>
        <li>Starbucks India Mobile App Terms of Use</li>
        <li>Customer Service</li>
        <li>Starbucks Rewards Day Offer</li>
        <li>Delivery</li>
        <li>Season's Gifting</li>
        <li>Offer for Beverage Subscription at Starbucks.</li>
        <li>Loyalty Program Terms and Conditions</li>
        <li>Beverage Subscription</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Social Media</h4>
      <div className="social-icons">
        <GrInstagram className='' />
        <FaFacebookF />
        <IoLogoTwitter />
      </div>
      <div className="app-buttons">
        <img src={appstore} alt="App Store" />
        <img src={playstore} alt="Google Play" />
      </div>
    </div>
  </div><hr className='hrtag'></hr>
  <div className='buttons-1'>
    <div>
      <h5>Web Accesiblity <span className='gap'>|</span></h5>
    </div>
    <div>
      <h5>Privacy Statment <span className='gap'>|</span></h5>
    </div>
    <div>
      <h5>Terms of Use <span className='gap'>|</span></h5>
    </div>
    <div>
      <h5>Contact us</h5>
    </div>
  </div>
</footer>
      </div>
    </div>


  )
}

export default Account
 
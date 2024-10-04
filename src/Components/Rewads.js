import React from 'react';
import './Rewards.scss';
import { Link } from 'react-router-dom';


import star from '../Components/Assets/Image/Free_tall_drink_ico_65e0d97444_36d06efe43_c47f54a0d6.png'

const Rewads = () => {
  return (
    <div className='Body'>

      <div className='home-r-button'>
        <Link to='/'>
          <button className='home-btn'>Home</button>
        </Link>


        <button className='Rbtn'> --Starbucks Rewads</button>
      </div>

      <div className='rewads'>

        <div className='rewad1'>
          <h2>Starbucks</h2>
          <h4>Rewards</h4>
        </div>

        <div className='btn-container'>
          <h1>Earn stars on every order</h1>
          <button className='know-more-btn'>Know More</button>
        </div>
      </div>

      <div className='how'>
        <h1>How to collect stars</h1>
        <hr></hr>
      </div>

      <div className='star1'>
        <img className='star1.1' src={star} alt='star' />
        <h4>Create an account to get access to full range of Starbucks Rewards Benefits</h4>
      </div>


      <div className='star1'>
        <img src={star} alt='star' />
        <h4>Earn a star on every Rs. 400 spent using Starbucks Card</h4>
      </div>

      <div className='star1'>
        <img src={star} alt='star' />
        <h4>Earn a star on every Rs. 500 spent using Cash, Debit/Credit, or UPI</h4>
      </div>

      <div className='star1'>
        <img src={star} alt='star' />
        <h4>As you earn stars, you can redeem them for rewards—like free drinks, and more when you annually spend Rs 600 or more.

</h4>
      </div>


      <div className='star1'>
        <img src={star} alt='star' />
        <h4>Enjoy the convenience of in-store mobile ordering and pick up

</h4>
      </div>

      <div className='star1'>
        <img src={star} alt='star' />
        <h4>Collect Stars effortlessly, however you pay - Rewards just got easier!</h4>
      </div>

      
    </div>




  );
};

export default Rewads
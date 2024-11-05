// import React from 'react';
// import './Home.scss';
// import { Link } from 'react-router-dom';
// import { TbSquareDot } from "react-icons/tb";
// import { GrInstagram } from "react-icons/gr";
// import { FaFacebookF } from "react-icons/fa";
// import { IoLogoTwitter } from "react-icons/io";






// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';





// import logo from "../Components/Assets/Image/logo.png"
// import appstore from "../Components/Assets/Image/appstoreiOS.png"
// import playstore from "../Components/Assets/Image/appstoreAndroid.png"

// import coffe from '../Components/Assets/Image/Bestseller.png';
// import Drink from '../Components/Assets/Image/Drinks (1).webp';
// import juice from '../Components/Assets/Image/285_x_595_App_removebg_preview_2_c4bc942184.png';
// import Food from '../Components/Assets/Image/Food.webp';
// import Muge from '../Components/Assets/Image/Merchandise.jpg';
// import Athome from '../Components/Assets/Image/CoffeeAtHome.jpg';
// import Ready from '../Components/Assets/Image/ReadyToEat.jpg';
// import worldofcoffe from '../Components/Assets/Image/ICW_Live_Event_Day5_41f11ca3d2.jpg'

// import place from '../Components/Assets/Image/placeholder.webp';
// import chocolate from '../Components/Assets/Image/100447.webp';
// import venila from '../Components/Assets/Image/112573.webp'
// import coldblack from '../Components/Assets/Image/104997.webp'



// const Herosection = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };
//   return (
//     <div>
//       <div className="hero-section">
//         <div className="text-container">
//           <h1>Starbucks</h1>
//         </div>
//         <div className="button-container">
//           <Link to='/rewads'>
//             <button className="know-more-btn">Know More</button>
//           </Link>
//         </div>
//       </div>

//       <div class="boots">
//         <img src={juice} alt="Starbucks Drinks" />
//         <div class="text">
//           <h5>Starbucks</h5>
//           <h2>Beverage Subscription</h2>
//           <p>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details.</p>
//         </div>
//         <a href="#" class="button">Know More</a>
//       </div>



//       <div className='main'>
//         <h2 className='curation'>Handcrafted Curations</h2>
//         <div className='main1'>
//           <div>
//             <img className="coffe" src={coffe} alt='coffe' width="110px" height="110px" />
        
//             <Link to='/order'>   <h5 className='best'>
//              Bestseller</h5>
//              </Link>
           
//           </div>

//           <div>
//             <img className='drink' src={Drink} alt='Drink' width="110px" height="110px" />
//             <Link to='/order'>   <h5 className='drink1'>Drinks</h5></Link>
//           </div>

//           <div>
//             <img className='food' src={Food} alt='Food' width="110px" height="110px" />
//             <h5 className='food1'>Food</h5>
//           </div>

//           <div>
//             <img className='muge' src={Muge} alt='Muge' width="110px" height="110px" />
//             <h5 className='muge1'>Merchandise</h5>
//           </div>

//           <div>
//             <img className='athome' src={Athome} alt='Athome' width="110px" height="110px" />
//             <h5 className='athome1'>Coffee At Home</h5>
//           </div>

//           <div>
//             <img className='ready' src={Ready} alt='Ready' width="110px" height="110px" />
//             <h5 className='ready1'>Ready to Eat</h5>
//           </div>
//         </div>
//       </div>

//       <div className='slid'>
//         <div className='menu'>
//           <div className='barista'>
//             <h2>Barista Recommends</h2>
//           </div>

//           <div>
//             <button className='Menu-btn'>View Menu</button>
//           </div>
//         </div>


//         <Slider {...settings} className='overall'>
//           <div className='slid1'>
//             <img className='place' src={place} height="70px" width="70px" />
//             <TbSquareDot className='dot' />
//             <h4 className='cappuccino'>Cappuccino</h4>
//             <button className='item'>Add item</button>
//             <h4 className='rate'>₹ 283.<span className='point'>50</span></h4>
//           </div>

//           <div className='slid2'>
//             <img className='place' src={chocolate} height="70px" width="70px" />
//             <TbSquareDot className='dot' />
//             <h4 className='cappuccino'>Signature Hot Chocolate</h4>
//             <button className='item'>Add item</button>
//             <h4 className='rate'>₹ 309.<span className='point'>75</span></h4>
//           </div>

//           <div className='slid3'>
//             <img className='place' src={venila} height="70px" width="70px" />
//             <TbSquareDot className='dot' />
//             <h4 className='cappuccino'>Vanilla Milkshake</h4>
//             <button className='item'>Add item</button>
//             <h4 className='rate'>₹ 378.00</h4>
//           </div>


//           <div className='slid4'>
//             <img className='place' src={coldblack} height="70px" width="70px" />
//             <TbSquareDot className='dot' />
//             <h4 className='cappuccino'>Cold Brew Black</h4>
//             <button className='item'>Add item</button>
//             <h4 className='rate' >₹ 299.<span className='point'>25</span></h4>
//           </div>

//           <div className='slid5'>
//             <img className='place' src={place} height="70px" width="70px" />
//             <TbSquareDot className='dot' />
//             <h4 className='cappuccino'>Tall Java Chip Frappuccion</h4>
//             <button className='item'>Add item</button>
//             <h4 className='rate'>₹ 388.<span className='point'>50</span></h4>
//           </div>
//         </Slider>
//       </div>

//       <div className='name' >
//         <h1>Learn more about the world of coffe!</h1>
//         <div className='backgr'>
//           <h2>dfghj</h2>
//         </div>
        
//       </div>



//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-logo">
//             <img src={logo} alt="Starbucks Logo" />
//           </div>
//           <div className="footer-section">
//             <h4>About Us</h4>
//             <ul className='fonts'>
//               <li>Our Heritage</li>
//               <li>Coffeehouse</li>
//               <li>Our Company</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Responsibility</h4>
//             <ul className='fonts'>
//               <li>Diversity</li>
//               <li>Community</li>
//               <li>Ethical Sourcing</li>
//               <li>Environmental Stewardship</li>
//               <li>Learn More</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul className='fonts'>
//               <li>Privacy Policy</li>
//               <li>FAQs</li>
//               <li>Starbucks India Mobile App Terms of Use</li>
//               <li>Customer Service</li>
//               <li>Starbucks Rewards Day Offer</li>
//               <li>Delivery</li>
//               <li>Season's Gifting</li>
//               <li>Offer for Beverage Subscription at Starbucks.</li>
//               <li>Loyalty Program Terms and Conditions</li>
//               <li>Beverage Subscription</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>Social Media</h4>
//             <div className="social-icons">
//               <GrInstagram className='' />
//               <FaFacebookF />
//               <IoLogoTwitter />

//             </div>
//             <div className="app-buttons">
//               <img src={appstore} alt="App Store" />
//               <img src={playstore} alt="Google Play" />
//             </div>
//           </div>
//         </div><hr className='hrtag'></hr>

//         <div className='buttons-1'>
//           <div>
//             <h5>Web Accesiblity <span className='gap'>|</span></h5>
//           </div>

//           <div>
//             <h5>Privacy Statment <span className='gap'>|</span></h5>
//           </div>

//           <div>
//             <h5>Terms of Use <span className='gap'>|</span></h5>
//           </div>

//           <div>
//             <h5>Contact us</h5>
//           </div>

//         </div>

//       </footer>





//     </div>





//   );
// };

// export default Herosection;






import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { TbSquareDot } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { useNavigate } from 'react-router-dom';






import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





import logo from "../Components/Assets/Image/logo.png"
import appstore from "../Components/Assets/Image/appstoreiOS.png"
import playstore from "../Components/Assets/Image/appstoreAndroid.png"

import coffe from '../Components/Assets/Image/Bestseller.png';
import Drink from '../Components/Assets/Image/Drinks (1).webp';
import juice from '../Components/Assets/Image/285_x_595_App_removebg_preview_2_c4bc942184.png';
import Food from '../Components/Assets/Image/Food.webp';
import Muge from '../Components/Assets/Image/Merchandise.jpg';
import Athome from '../Components/Assets/Image/CoffeeAtHome.jpg';
import Ready from '../Components/Assets/Image/ReadyToEat.jpg';
import worldofcoffe from '../Components/Assets/Image/ICW_Live_Event_Day5_41f11ca3d2.jpg'

import place from '../Components/Assets/Image/placeholder.webp';
import chocolate from '../Components/Assets/Image/100447.webp';
import venila from '../Components/Assets/Image/112573.webp'
import coldblack from '../Components/Assets/Image/104997.webp'



const Herosection = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {

    navigate('/order', { state: { activeTab: 'drinks' } });

  };

  const handleRedirectFood = () => {

    navigate('/order', { state: { activeTab: 'food' } });

  };

  const handleRedirectmerchandise =() => {
    navigate('/order', { state: { activeTab: 'merchandies' } });

  };

  const handleRedirectCoffee =() => {
    navigate('/order', { state: { activeTab: 'coffeeAtHome' } });

  };

  const handleRedirectReady =() => {
    
    navigate('/order', { state: {activeTab: 'readyToEat'}});

  };



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="hero-section">
        <div className="text-container">
          <h1>Starbucks</h1>
        </div>
        <div className="button-container">
          <Link to='/rewads'>
            <button className="know-more-btn">Know More</button>
          </Link>
        </div>
      </div>

      <div class="boots">
        <img src={juice} alt="Starbucks Drinks" />
        <div class="text">
          <h5>Starbucks</h5>
          <h2>Beverage Subscription</h2>
          <p>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details.</p>
        </div>
        <a href="#" class="button">Know More</a>
      </div>



      <div className='main'>
        <h2 className='curation'>Handcrafted Curations</h2>
        <div className='main1'>
          <div>
            <img className="coffe" src={coffe} alt='coffe' width="110px" height="110px" />
        
            <Link to='/order'>   <h5 className='best'>
             Bestseller</h5>
             </Link>
           
          </div>

          <div>
            <img className='drink' src={Drink} alt='Drink' width="110px" height="110px" />
         <h5 onClick={handleRedirect} className='drink1'>Drinks</h5>
          </div>

          <div>
            <img className='food' src={Food} alt='Food' width="110px" height="110px" />
            <h5 onClick={handleRedirectFood} className='food1'>Food</h5>
          </div>

          <div>
            <img className='muge' src={Muge} alt='Muge' width="110px" height="110px" />
            <h5 onClick={handleRedirectmerchandise} className='muge1'>Merchandise</h5>
          </div>

          <div>
            <img className='athome' src={Athome} alt='Athome' width="110px" height="110px" />
            <h5 onClick={handleRedirectCoffee} className='athome1'>Coffee At Home</h5>
          </div>

          <div>
            <img className='ready' src={Ready} alt='Ready' width="110px" height="110px" />
            <h5 onClick={handleRedirectReady} className='ready1'>Ready to Eat</h5>
          </div>
        </div>
      </div>

      <div className='slid'>
        <div className='menu'>
          <div className='barista'>
            <h2>Barista Recommends</h2>
          </div>

          <div>
            <button className='Menu-btn'>View Menu</button>
          </div>
        </div>


        <Slider {...settings} className='overall'>
          <div className='slid1'>
            <img className='place' src={place} height="70px" width="70px" />
            <TbSquareDot className='dot' />
            <h4 className='cappuccino'>Cappuccino</h4>
            <button className='item'>Add item</button>
            <h4 className='rate'>₹ 283.<span className='point'>50</span></h4>
          </div>

          <div className='slid2'>
            <img className='place' src={chocolate} height="70px" width="70px" />
            <TbSquareDot className='dot' />
            <h4 className='cappuccino'>Signature Hot Chocolate</h4>
            <button className='item'>Add item</button>
            <h4 className='rate'>₹ 309.<span className='point'>75</span></h4>
          </div>

          <div className='slid3'>
            <img className='place' src={venila} height="70px" width="70px" />
            <TbSquareDot className='dot' />
            <h4 className='cappuccino'>Vanilla Milkshake</h4>
            <button className='item'>Add item</button>
            <h4 className='rate'>₹ 378.00</h4>
          </div>


          <div className='slid4'>
            <img className='place' src={coldblack} height="70px" width="70px" />
            <TbSquareDot className='dot' />
            <h4 className='cappuccino'>Cold Brew Black</h4>
            <button className='item'>Add item</button>
            <h4 className='rate' >₹ 299.<span className='point'>25</span></h4>
          </div>

          <div className='slid5'>
            <img className='place' src={place} height="70px" width="70px" />
            <TbSquareDot className='dot' />
            <h4 className='cappuccino'>Tall Java Chip Frappuccion</h4>
            <button className='item'>Add item</button>
            <h4 className='rate'>₹ 388.<span className='point'>50</span></h4>
          </div>
        </Slider>
      </div>

      <div className='name' >
        <h1>Learn more about the world of coffe!</h1>
        <div className='backgr'>
          <h2>dfghj</h2>
        </div>
        
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





  );
};

export default Herosection;
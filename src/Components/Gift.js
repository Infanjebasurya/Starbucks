import React from 'react'
import { Link } from 'react-router-dom'
import './Gift.scss';
import { TbSquareDot } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

import banner from "../Components/Assets/Image/banner_icon_1_2_d97e1578ee.png"

import tsb from "../Components/Assets/Image/TSB_GC_indiacard_1_1_28dafb2bb6.png"
import just from "../Components/Assets/Image/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png"
import just1 from "../Components/Assets/Image/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp"
import just2 from "../Components/Assets/Image/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_0a31455af9.png"
import just3 from "../Components/Assets/Image/0bed73e6_0d8d_48c0_8936_f46d7355a8ad_1_1_2bdef6b475.webp"
import just4 from "../Components/Assets/Image/eacb11c1_b46b_4105_9c99_e0a60224adaa_1_0464825bb5.png"
import just5 from "../Components/Assets/Image/2822e4c5_38ff_422a_a225_cfc3a6bdfc06_1_fdcaafd8bd.png"
import just6 from "../Components/Assets/Image/61c1abaf_3b0f_48af_903e_426c1b9dae41_1_9a59b0ea34.webp"
import just7 from "../Components/Assets/Image/60b5bfc9_b8df_4a8b_9565_300c0797e488_1_e844c75b0c.webp"
import just8 from "../Components/Assets/Image/just8.png"
import just9 from "../Components/Assets/Image/just9.webp"
import just10 from "../Components/Assets/Image/just10.png"
import just11 from "../Components/Assets/Image/just11.webp"
import just12 from "../Components/Assets/Image/just12.png"
import just13 from "../Components/Assets/Image/just13.png"
import just14 from "../Components/Assets/Image/just14.webp"


import logo from "../Components/Assets/Image/logo.png"
import appstore from "../Components/Assets/Image/appstoreiOS.png"
import playstore from "../Components/Assets/Image/appstoreAndroid.png"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Contact() {
    return (
        <div>
            <div className='hbuttons'>
                <Link to='/'>
                    <button className='homebtns'>Home</button>
                </Link>
                <button className='cards-btn'>--Gift Cards</button>
            </div>
            <div className='collection'>
                <div className='collection1'>
                    <div>
                        <img src={banner} />
                    </div>
                    <h5>Starbucks</h5>
                    <h1>Essential Collection</h1>
                    <h4>A whole new expression of classic Starbucks Design.Explore erchandise collection.</h4>
                    <h5 className='h5btn'>Starting From</h5>
                    <h2>₹500</h2>
                    <div className='collection2'>
                        <button className='nowbtn'>Order Now</button>

                    </div>
                </div>
            </div>


            <div className='backclr'>
                <Tabs>
                    <TabList className='tab'>
                        {/* <Tab>FEAURED</Tab> */}
                        {/* <Tab>ANYTIME</Tab> */}
                        {/* <Tab>CONGRATULATIONS</Tab> */}
                        {/* <Tab>THANK YOU</Tab> */}


                        <Tab className='tabs1'>FEAURED</Tab>
                        <Tab className='tabs1'>ANYTIME</Tab>
                        <Tab className='tabs1'>CONGRATULATIONS</Tab>
                        <Tab className='tabs1'>THANK YOU</Tab>
                    </TabList>

                    <TabPanel>

                        <div className='anytime'>
                            <h1>Anytime</h1>
                        </div><hr></hr>
                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={tsb} />
                                </div>
                                <div className='child'>
                                    <h4>India Exclusive</h4>
                                    <p>Bring in the festive season and make<br></br>each celebration memorable.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just} />
                                </div>
                                <div className='child'>
                                    <h4>India Exclusive</h4>
                                    <p>Starbucks is best when shared.Treat<br></br>your pals to a good cup of coffe.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just1} />
                                </div>
                                <div className='child'>
                                    <h4>India Exclusive</h4>
                                    <p>Captivating cosy,coffee.Gift your<br></br> loved ones this Starbucks Gift car</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        </div>


                        <div className='add'>
                            <div className='cong'>
                                <h1>Congratulations</h1>
                            </div><hr></hr>
                            <div className='grand1'>
                                <div className='prant1'>
                                    <div className='par-img1'>
                                        <img src={just2} />
                                    </div>
                                    <div className='child1'>
                                        <h4>India Exclusive</h4>
                                        <p>Coffe.Cheer.celebration.Enjoy each of <br></br> your special moments with Starbucks.</p>
                                        <button>Add Item</button>
                                    </div>
                                </div>
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
                    </TabPanel>

                    <TabPanel>
                        <div className='anytime'>
                            <h1>Anytime</h1>
                        </div><hr></hr>
                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={tsb} />
                                </div>
                                <div className='child'>
                                    <h4>India Exclusive</h4>
                                    <p>Bring in the festive season and make<br></br>each celebration memorable.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just} />
                                </div>
                                <div className='child'>
                                    <h4>India Exclusive</h4>
                                    <p>Starbucks is best when shared.Treat<br></br>your pals to a good cup of coffe.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just3} />
                                </div>
                                <div className='child'>
                                    <h4>Starbucks</h4>
                                    <p>Take the moment and make it special<br></br> with Starbucks</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        </div>


                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just4} />
                                </div>
                                <div className='child'>
                                    <h4>Hang in There</h4>
                                    <p>Sometime,Company goes a long way.<br></br>Let your friends know you have their<br></br>back.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just5} />
                                </div>
                                <div className='child'>
                                    <h4>My Treat</h4>
                                    <p>Nothing like a cup of coffee to flame a<br></br>friendship. Share the experience with<br></br>your best fr...</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just6} />
                                </div>
                                <div className='child'>
                                    <h4>Way To Go</h4>
                                    <p>It's time celebrate! Show your<br></br>appreciation with this Starbucks Goft<br></br>Card.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        </div>



                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just7} />
                                </div>
                                <div className='child'>
                                    <h4>This One's On Me</h4>
                                    <p>Everything I brew, I brew it fro you. This<br></br>one's on me.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just8} />
                                </div>
                                <div className='child'>
                                    <h4>Good Things Ahead</h4>
                                    <p>Have a cup of coffee,it's all good from<br></br>here.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just1} />
                                </div>
                                <div className='child'>
                                    <h4>U Keep Me Warm</h4>
                                    <p>Captivating cosy,coffee.Gift your<br></br> loved ones this Starbucks Gift Card</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        </div>




                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just9} />
                                </div>
                                <div className='child'>
                                    <h4>U Are The Best Just Sayin</h4>
                                    <p>Think they're Nitro to your Brew?<br></br>Let them know.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just10} />
                                </div>
                                <div className='child'>
                                    <h4>Life Happens</h4>
                                    <p>Life happens,coffee helps.Brighten up<br></br>their day with Starbucks.</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just11} />
                                </div>
                                <div className='child'>
                                    <h4>U Are Awesome</h4>
                                    <p>if you someone,let'em know.<br></br>Share this Gift Card with sll the<br></br>Awesome people in you...</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                        </div>



                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just12} />
                                </div>
                                <div className='child'>
                                    <h4>Greetings</h4>
                                    <p>Let each 'hello' be one with coffee</p>
                                    <button>Add Item</button>
                                </div>
                            </div>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just13} />
                                </div>
                                <div className='child'>
                                    <h4>Global Spring Card</h4>
                                    <p>Blissful,Blooming and bright.Spring is<br></br>a merry time. keep things fresh and<br></br>lively.</p>
                                    <button>Add Item</button>
                                </div>
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
                    </TabPanel>



                    <TabPanel>
                        <div className='anytime'>
                            <h1>Congratulations</h1>
                        </div><hr></hr>


                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just2} />
                                </div>
                                <div className='child'>
                                    <h4>Congrats</h4>
                                    <p>Coffee.Cheer.celebrate.Enjoy each of<br></br>your special memoents with Starbucks</p>
                                    <button>Add Item</button>
                                </div>
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
                    </TabPanel>


                    <TabPanel>
                        <div className='anytime'>
                            <h1>Congratulations</h1>
                        </div><hr></hr>


                        <div className='grand'>
                            <div className='prant'>
                                <div className='par-img'>
                                    <img src={just14} />
                                </div>
                                <div className='child'>
                                    <h4>Thank you</h4>
                                    <p>To the people who make coffee and<br></br>those who love it, thank you.</p>
                                    <button>Add Item</button>
                                </div>
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
                    </TabPanel>
                </Tabs>

            </div>
        </div>



    )
}


export default Contact

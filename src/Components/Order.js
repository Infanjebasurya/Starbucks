import React from 'react'
import { Link } from 'react-router-dom';
import './Order.scss'
import { TbSquareDot } from "react-icons/tb";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { SiV } from 'react-icons/si';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";



import best from "../Components/Assets/Image/Bestseller.png"
import americon from "../Components/Assets/Image/100433.jpg"
import Coldcoffe from "../Components/Assets/Image/105468.jpg"
import double from "../Components/Assets/Image/103515.jpg"
import Creamy from "../Components/Assets/Image/108177.jpg"
import Capp from "../Components/Assets/Image/100419.jpg"
import Panner from "../Components/Assets/Image/100100_1.png"


import Lette from "../Components/Assets/Image/115751_1.png"
import clasic from "../Components/Assets/Image/115987.png"
import Arabicass from "../Components/Assets/Image/115986.png"
import Pumpkins from "../Components/Assets/Image/102253_1.png"
import Pumpkins1 from "../Components/Assets/Image/102257_1.png"
import Pumpkins2 from "../Components/Assets/Image/100433.jpg"
import Pumpkins3 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins4 from "../Components/Assets/Image/100419.jpg"
import Pumpkins5 from "../Components/Assets/Image/100377.jpg"
import Pumpkins6 from "../Components/Assets/Image/Drinks (1).webp"
import Pumpkins7 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins8 from "../Components/Assets/Image/100391.jpg"
import Pumpkins9 from "../Components/Assets/Image/104068.jpg"
import Pumpkins10 from "../Components/Assets/Image/100433 (1).jpg"
import Pumpkins11 from "../Components/Assets/Image/107934.jpg"
import Pumpkins12 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins13 from "../Components/Assets/Image/107329.jpg"
import Pumpkins14 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins15 from "../Components/Assets/Image/100512.jpg"
import Pumpkins16 from "../Components/Assets/Image/103973.jpg"
import Pumpkins17 from "../Components/Assets/Image/107329.jpg"
import Pumpkins18 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins19 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins20 from "../Components/Assets/Image/100441.jpg"
import Pumpkins21 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins22 from "../Components/Assets/Image/100385.jpg"
import Pumpkins23 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins24 from "../Components/Assets/Image/100399.jpg"
import Pumpkins25 from "../Components/Assets/Image/100427.jpg"
import Pumpkins26 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins27 from "../Components/Assets/Image/100427.jpg"
import Pumpkins28 from "../Components/Assets/Image/104072.jpg"
import Pumpkins29 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins30 from "../Components/Assets/Image/104072.jpg"
import Pumpkins31 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins32 from "../Components/Assets/Image/100485.jpg"
import Pumpkins33 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins34 from "../Components/Assets/Image/placeholder.webp"
import Pumpkins35 from "../Components/Assets/Image/100477.jpg"




import Foods1 from "../Components/Assets/Image/115298_1.jpg"
import Foods2 from "../Components/Assets/Image/115299_1.jpg"
import Foods3 from "../Components/Assets/Image/115302_1.jpg"
import Foods4 from "../Components/Assets/Image/115301_1.jpg"
import Foods5 from "../Components/Assets/Image/115300_1.jpg"
import Foods6 from "../Components/Assets/Image/115304_1.jpg"
import Foods7 from "../Components/Assets/Image/285_x_595_App_removebg_preview_2_c4bc942184.png"
import Foods8 from "../Components/Assets/Image/115583_1.png"
import Foods9 from "../Components/Assets/Image/101728_1.png"
import Foods10 from "../Components/Assets/Image/100100_1 (1).png"
import Foods11 from "../Components/Assets/Image/116045_1.png"
import Foods12 from "../Components/Assets/Image/116047_1.png"
import Foods13 from "../Components/Assets/Image/115582_1.png"


import Festives1 from "../Components/Assets/Image/115687_1.png"
import Festives2 from "../Components/Assets/Image/115700_1.png"
import Festives3 from "../Components/Assets/Image/115750_1.png"
import Festives4 from "../Components/Assets/Image/115985_1.png"


import Diwali from "../Components/Assets/Image/109617_1.png"


import Diwali1 from "../Components/Assets/Image/115956_1.png"
import Diwali2 from "../Components/Assets/Image/115958_1.png"
import Diwali3 from "../Components/Assets/Image/116044_1.png"




function Order() {
    return (
        <div>
            <div className='hbuttons'>
                <Link to='/'>
                    <button className='homebtns'>Home</button>
                </Link>
                <button className='orderbtn'>--Order</button>
            </div>

            <div className='back'>

            </div>

            <div className=''>

                <Tabs>
                    <TabList className='tabs'>
                        <Tab className='tab1'id='eve1'>Bestseller</Tab>
                        <Tab className='tab1'>Drinks</Tab>
                        <Tab className='tab1'>Food</Tab>
                        <Tab className='tab1'>Merchandies</Tab>
                        <Tab className='tab1'>Coffee At Home</Tab>
                        <Tab className='tab1'>Ready To Eat</Tab>


                        <div>
                            <Tabs className='tagsss'>
                                <Tab className='tab2'>Espresso</Tab>
                                <Tab className='tab2'>Frappuccino*blended Beverages</Tab>
                                <Tab className='tab2'>Other Breverages</Tab>
                                <Tab className='tab2'>Brewwd Coffee</Tab>
                                <Tab className='tab2'>tea</Tab>
                                <Tab className='tab2'>Cold Coffee</Tab>

                                <TabPanel><h1>fghjk</h1></TabPanel>
                            </Tabs>
                        </div>
                    </TabList>


                    <TabPanel>
                        <div className=''>
                            <div className='eveyyone'>
                                <h4>Bestseller</h4>
                                <p>Everyone's favorite Starbucks put together in a specially curated collection.</p>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={best} />
                                    <TbSquareDot className='dots' />
                                    <h4>Java Chip Frappuccion</h4>
                                    <p className='tall'>TALL(354 mL) .392 kcal</p>
                                    <p>Mocha sauce and Frappuccino Chips blended <br />eith with Frappu</p>

                                    <div className='spans'>
                                        <h3>₹ 388<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>



                                <div className='bckground'>
                                    <img src={americon} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffe Americano</h4>
                                    <p className='tall'>TALL(354 mL) .392 kcal</p>
                                    <p>Rich in flavor,fll-bodied espresso with hot water <br />in true...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>



                                <div className='bckground'>
                                    <img src={Coldcoffe} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cold Coffee</h4>
                                    <p className='tall'>TALL(354 mL) .392 kcal</p>
                                    <p>Our signature rich in flavor espresso blended with <br />delicate...</p>
                                    <div className='spans'>
                                        <h3>₹ 372<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div>

                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={double} />
                                    <TbSquareDot className='dots' />
                                    <h4>Double Chocolate Chip Frappuccino</h4>
                                    <p className='tall'>TALL(354 mL) .415 kcal</p>
                                    <p>Rich mocha-flavored sauce meets up with <br />chocolaty chips, mil...</p>
                                    <div className='spans'>
                                        <h3>₹ 420<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Creamy} />
                                    <TbSquareDot className='dots' />
                                    <h4>Creamy Spinach and Corn Pocket</h4>
                                    <p className='tall'>PER SERVE (160 gm) - 358 Kcal</p>
                                    <p>"A creamy spinach and corn filling encased in a <br />buttery Fren...</p>
                                    <div className='spans'>
                                        <h3>₹ 252<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Capp} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cappuccino</h4>
                                    <p className='tall'>SHORT(237 mL) .104 Kca</p>
                                    <p>Dark, Rich in flavour espresso lies in wait under a <br />smoothed...</p>
                                    <div className='spans'>
                                        <h3>₹ 299<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Panner} />
                                    <TbSquareDot className='dots' />
                                    <h4>Paneer Tikka Sandwich</h4>
                                    <p className='tall'>PER SERVE (185 gm ) - 537 kcal</p>
                                    <p>Marinated tandoori paneer filling, sliced cheese<br />and whole ...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='eee'>
                            </div>
                        </div>
                        

                    </TabPanel>





                    <TabPanel>
                        <div>
                            <div className='eveyyone' id='eve2'>
                                <h4>Espresso</h4>
                                <p>Our smooth signature Espresso Roast eitch rich flavor and caramelly sweetness is at the very heart of everythin we do.</p>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Lette} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cookie Creame Lette</h4>
                                    <p className='tall'>SHORT(237 mL) .344 Kcal</p>
                                    <p>Handcrafted espresso from the world's top 3% <br />Arabica with st...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 430<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={clasic} />
                                    <TbSquareDot className='dots' />
                                    <h4>Classic Iced Coffee</h4>
                                    <p className='tall'>SHORT(237 mL) .128 Kcal</p>
                                    <p>Savour our premium coffee made with top 3% <br />Arabica beans in ...</p>
                                    <div className='spans'>
                                        <h3>₹ 236<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Arabicass} />
                                    <TbSquareDot className='dots' />
                                    <h4>Classic Hot Coffee</h4>
                                    <p className='tall'>Classic Hot Coffee(237 mL) .105 Kcal</p>
                                    <p>Savour our premium coffee made with top 3% <br />Arabica beans in ...</p>
                                    <div className='spans'>
                                        <h3>₹ 157<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins} />
                                    <TbSquareDot className='dots' />
                                    <h4>Pumpkin Spice Latte</h4>
                                    <p className='tall'>SHORT(237 ML) .219 Kcal</p>
                                    <p>Our signature Pumpkin Spice Latte is back – <br />combining handcr...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 430<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins1} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Pumpkin Spice Latte</h4>
                                    <p className='tall'>TALL(354 mL) .301 Kcal</p>
                                    <p>Our signature Pumpkin Spice Latte is back – <br />combining handcr...</p>
                                    <div className='spans'>
                                        <h3>₹ 236<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins2} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffè Americano</h4>
                                    <p className='tall'>SHORT() .</p>
                                    <p>"Rich, full-bodied espresso with hot water in true<br />European ...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins3} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffè Mocha
                                    </h4>
                                    <p className='tall'>SHORT() .</p>
                                    <p>"We combine our Rich in flavour, full-bodied <br />espresso with b...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 341<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins4} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cappuccino</h4>
                                    <p className='tall'>SHORT(237 mL) .104 Kcal</p>
                                    <p>Dark, Rich in flavour espresso lies in wait under a <br />smoothed...</p>
                                    <div className='spans'>
                                        <h3>₹ 299<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins5} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffe Latte</h4>
                                    <p className='tall'>SHORT(Short Latte) .104 kca</p>
                                    <p>Our dark, Rich in flavour espresso balanced with <br />steamed mil...</p>
                                    <div className='spans'>
                                        <h3>₹ 304<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>




                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins6} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caramel Macchiato</h4>
                                    <p className='tall'>SHORT(237 mL) .162 kcal</p>
                                    <p>Freshly steamed milk with vanilla-flavored syrup is <br />marked w...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 362<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins7} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caramel Macchiato</h4>
                                    <p className='tall'>SHORT() .</p>
                                    <p>Freshly steamed milk with vanilla-flavored syrup is <br />marked w...</p>
                                    <div className='spans'>
                                        <h3>₹ 362<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins8} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffè Mocha</h4>
                                    <p className='tall'>SHORT(237 mL) .232 kcal</p>
                                    <p>We combine our rich in flavour, full-bodied<br />espresso with bi...</p>
                                    <div className='spans'>
                                        <h3>₹ 341<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins9} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chocolate Cappuccino
                                    </h4>
                                    <p className='tall'>SHORT(237 ML) .150 kcal</p>
                                    <p>Dark, Rich in flavour espresso and bittersweet <br />cocoa lies in..
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 372<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins7} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chocolate Cappuccino
                                    </h4>
                                    <p className='tall'>SHORT() .</p>
                                    <p>Dark, Rich in flavour espresso and bittersweet <br />cocoa lies in...</p>
                                    <div className='spans'>
                                        <h3>₹ 372<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins10} />
                                    <TbSquareDot className='dots' />
                                    <h4>Caffe Americano</h4>
                                    <p className='tall'>SHORT(237 mL) .0 kcal</p>
                                    <p>Rich in flavour, full-bodied espresso with hot water<br />in true...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins11} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chocolate Cortado
                                    </h4>
                                    <p className='tall'>PER SERVE (120 ML) - 88 Kcal</p>
                                    <p>A perfect espresso shot and mocha sauce, topped <br />with steamed...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins12} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chocolate Cortado
                                    </h4>
                                    <p>A perfect espresso shot and mocha sauce, topped<br />with steamed...</p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins13} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cortado</h4>
                                    <p className='tall'>PER SERVE (120 ML) - 72 Kcal</p>
                                    <p>A perfect espresso shot topped with steamed milk.</p>
                                    <div className='spans'>
                                        <h3>₹ 294<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins14} />
                                    <TbSquareDot className='dots' />
                                    <h4>Cortado
                                    </h4>
                                    <p>A perfect espresso shot topped with steamed milk. <br />120 ML, 72...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 294<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins15} />
                                    <TbSquareDot className='dots' />
                                    <h4>Doppio Espresso
                                    </h4>
                                    <p className='tall'>PER SERVE (45 ML) - 0 Kcal</p>
                                    <p>Our smooth signature Espresso Roast and it <br />caramelly sweetn...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins16} />
                                    <TbSquareDot className='dots' />
                                    <h4>Flat White</h4>
                                    <p className='tall'>SHORT(237 mL) .0 kcal</p>
                                    <p>SHORT(237 mL) .104 kcal<br />ristretto and fin..</p>
                                    <div className='spans'>
                                        <h3>₹ 330<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins17} />
                                    <TbSquareDot className='dots' />
                                    <h4>Hazelnut Cortado
                                    </h4>
                                    <p className='tall'>PER SERVE (120 ML) - 76 Kcal</p>
                                    <p>A perfect espresso shot and hazelnut syrup, topped <br /> with stea...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins18} />
                                    <TbSquareDot className='dots' />
                                    <h4>Hazelnut Cortado</h4>
                                    <p>DA perfect espresso shot and hazelnut syrup, topped <br />milk and a lig...</p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins19} />
                                    <TbSquareDot className='dots' />
                                    <h4>Tall Iced Caffè Latte</h4>
                                    <p className='tall'>ALL() .</p>
                                    <p>Our dark, rich espresso balanced with steamed <br />steamed mil...</p>
                                    <div className='spans'>
                                        <h3>₹ 304<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins20} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Caffè Americano
                                    </h4>
                                    <p className='tall'>TALL(354 mL) .0 kcal</p>
                                    <p>Espresso shots are topped with water to produce a <br />light laye...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 315<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins21} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Caffè Mocha
                                    </h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Espresso combined with bittersweet mocha sauce <br />and milk and ...</p>
                                    <div className='spans'>
                                        <h3>₹ 299<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins22} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Caffè Latte</h4>
                                    <p className='tall'>TALL(354 mL) .122 kcal</p>
                                    <p>Our dark, Rich in flavour espresso is combined with <br />milk and...</p>
                                    <div className='spans'>
                                        <h3>₹ 341<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>




                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins23} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Cappuccinoe</h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Signature Italian style Cappuccino with espresso <br />shot, steam...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 336<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins24} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Caffè Mocha</h4>
                                    <p className='tall'>TALL(354 mL) .291 kcal</p>
                                    <p>Espresso combined with bittersweet mocha sauce <br />and milk and ...</p>
                                    <div className='spans'>
                                        <h3>₹ 378<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins25} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Cappuccino</h4>
                                    <p className='tall'>TALL(354 mL) .214 kcal</p>
                                    <p>Signature Italian style Cappuccino with espresso<br />shot, steam...</p>
                                    <div className='spans'>
                                        <h3>₹ 336<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>




                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins26} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Chocolate Cappuccino</h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Signature Italian style Cappuccino with espresso <br />shot, mocha...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 409<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins27} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Chocolate Cappuccino</h4>
                                    <p className='tall'>TALL(354 mL) .161 kcal</p>
                                    <p>Signature Italian style Cappuccino with espresso <br />shot, mocha...</p>
                                    <div className='spans'>
                                        <h3>₹ 409<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins28} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Velvet Vanilla Latte</h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Rich in texture, smooth, and creamy latte elevated<br />with vani...</p>
                                    <div className='spans'>
                                        <h3>₹ 435<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>




                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins29} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced White Mocha</h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Espresso combined with white mocha sauce and <br />milk over ice. ...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 388<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins30} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced Velvet Vanilla Latte</h4>
                                    <p className='tall'>TALL(354 mL) .383 kcal</p>
                                    <p>Rich in texture, smooth, and creamy latte elevated <br />with vani...</p>
                                    <div className='spans'>
                                        <h3>₹ 435<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins31} />
                                    <TbSquareDot className='dots' />
                                    <h4>Solo Espresso</h4>
                                    <p className='tall'>TALL() .</p>
                                    <p>Our smooth signature Espresso Roast and its<br />caramelly sweetn...</p>
                                    <div className='spans'>
                                        <h3>₹ 262<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins32} />
                                    <TbSquareDot className='dots' />
                                    <h4>Iced White Mocha</h4>
                                    <p className='tall'>TALL(354 mL) .339 kcal</p>
                                    <p>Espresso combined with white mocha sauce and <br />milk over ice. ...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 388<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins33} />
                                    <TbSquareDot className='dots' />
                                    <h4>Vanilla Cortado</h4>
                                    <p>A perfect espresso shot and vanilla syrup topped<br />with steame...</p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Pumpkins34} />
                                    <TbSquareDot className='dots' />
                                    <h4>Velvet Vanilla Latte</h4>
                                    <p className='tall'>SHORT() .</p>
                                    <p>Our dark, Rich in flavour espresso balanced with<br />vanilla fla...</p>
                                    <div className='spans'>
                                        <h3>₹ 399               <span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Pumpkins35} />
                                    <TbSquareDot className='dots' />
                                    <h4>White Chocolate Mocha</h4>
                                    <p className='tall'>SHORT(237 mL) .252 kcal</p>
                                    <p>Our signature espresso meets white chocolate <br />sauce and steam...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 351<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>

                            <div className='eee'>

                            </div>



                        </div>

                    </TabPanel>



                    <TabPanel>
                        <div>
                            <div className='eveyyone' id='eve3'>
                                <h4>Sandwiches & Wraps</h4>
                                <p>Signature breads made with fresh ingredients and in-house sauces.</p>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Foods1} />
                                    <TbSquareDot className='dots' />
                                    <h4>Tandoori Soya Chaap Wrap</h4>
                                    <p className='tall'>484Kcal</p>
                                    <p>Soft succulent soya chaap in tandoori marinade,<br />cooked to a ...</p>

                                    <div className='spans'>
                                        <h3>₹ 357<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>



                                <div className='bckground'>
                                    <img src={Foods2} />
                                    <TbSquareDot className='dots' />
                                    <h4>BBQ Chicken Wrap</h4>
                                    <p className='tall'>380Kcal</p>
                                    <p>Smoky Chicken with chopped aromatic vegetables <br />tossed in our...</p>
                                    <div className='spans'>
                                        <h3>₹ 367<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>



                                <div className='bckground'>
                                    <img src={Foods3} />
                                    <TbSquareDot className='dots' />
                                    <h4>Bake In Roast Chicken Baguette SW</h4>
                                    <p className='tall'>PER SERVE (210 gm) - 706Kcal</p>
                                    <p>Roasted chicken meets assorted bell peppers and <br />onions in br...</p>
                                    <div className='spans'>
                                        <h3>₹ 477<span className='spansss'>.75</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Foods4} />
                                    <TbSquareDot className='dots' />
                                    <h4>Bake In Mushroom Cheese Melt <br></br>Baguette SW</h4>
                                    <p className='tall'>PER SERVE (210 gm) - 541Kcal</p>
                                    <p>Hearty mushrooms topped with melted yellow<br />cheddar cheese in...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 472<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>


                                <div className='bckground'>
                                    <img src={Foods5} />
                                    <TbSquareDot className='dots' />
                                    <h4>Bake In Pesto Veggie Sourdough SW</h4>
                                    <p>PER SERVE (150 gm) - 400Kcal<br />chopped ar...</p>
                                    <div className='spans'>
                                        <h3>₹ 430<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Foods6} />
                                    <TbSquareDot className='dots' />
                                    <h4>Bake In Sriracha Chicken Sourdough<br></br>SW</h4>
                                    <p className='tall'>PER SERVE (185 gm) - 521Kcal</p>
                                    <p>Spicy and tangy Sriracha grilled chicken shreds with<br />the add...</p>
                                    <div className='spans'>
                                        <h3>₹ 441<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>



                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Foods7} />
                                    <TbSquareDot className='dots' />
                                    <h4>Basil Tomato Mozzarella Cheese <br></br>Sandwich</h4>
                                    <p className='tall'>PER SERVE (170 gm) - 484Kca</p>
                                    <p>Tomato and mozzarella slices on a layer of basil<br />sauce sandw...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 383<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Foods8} />
                                    <TbSquareDot className='dots' />
                                    <h4>Spinach & Corn Sandwich</h4>
                                    <p className='tall'>PER SERVE (140 gm ) - 521 kcal</p>
                                    <p>A savory blend of spinach and corn, garlic & herb<br />aioli, mel...</p>
                                    <div className='spans'>
                                        <h3>₹ 262<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Foods9} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chicken Salad Sandwich<br></br>SW</h4>
                                    <p className='tall'>PER SERVE (185 gm ) - 574 kcal</p>
                                    <p>Tender chicken mixed with julienned colored bell<br />peppers, gr...</p>
                                    <div className='spans'>
                                        <h3>₹ 283<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>


                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Foods10} />
                                    <TbSquareDot className='dots' />
                                    <h4>Paneer Tikka Sandwich</h4>
                                    <p className='tall'>PER SERVE (185 gm ) - 537 kcal</p>
                                    <p>Marinated tandoori paneer filling, sliced cheese,<br />and whole ...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Foods11} />
                                    <TbSquareDot className='dots' />
                                    <h4>Chilli Paneer Sandwich</h4>
                                    <p className='tall'>PER SERVE (200 gm ) - 680 kcal</p>
                                    <p>A tangy chilli paneer filling with chopped spinach<br />tucked be...</p>
                                    <div className='spans'>
                                        <h3>₹ 278<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Foods12} />
                                    <TbSquareDot className='dots' />
                                    <h4>Lebanese Chicken Sandwich</h4>
                                    <p className='tall'>PER SERVE (200 gm ) - 643 kcal</p>
                                    <p>Tender malai chicken tikka, creamy garlic and herb<br />aioli, an...</p>
                                    <div className='spans'>
                                        <h3>₹ 283<span className='spansss'>.50</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>

                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Foods13} />
                                    <TbSquareDot className='dots' />
                                    <h4>Egg & Mayo Sandwich</h4>
                                    <p className='tall'>PER SERVE (170 gm ) - 592 kcal</p>
                                    <p>A creamy mixture of boiled and scrambled eggs<br />with spinach, ...
                                    </p>
                                    <div className='spans'>
                                        <h3>₹ 236<span className='spansss'>.25</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='eee'></div>


                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <div className='eveyyone'>
                                <h4>Festive Gifting</h4>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Festives1} />
                                    <TbSquareDot className='dots' />
                                    <h4>Starbucks Diwali Bearista Keychain</h4>
                                    <p>Our iconic bear in a traditional attire celebrating by<br />light...</p>
                                    <div className='spans'>
                                        <h3>₹ 390<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Festives2} />
                                    <TbSquareDot className='dots' />
                                    <h4>Starbucks Iced Latte Candle</h4>
                                    <p>An exclusive iced latte candle with notes of coffee<br />and vani...</p>
                                    <div className='spans'>
                                        <h3>₹ 750<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Festives3} />
                                    <TbSquareDot className='dots' />
                                    <h4>Starbucks Diwali Basket FY25</h4>
                                    <p>Inspired by the iconic siren, the elements in gold <br />make for ...</p>
                                    <div className='spans'>
                                        <h3>₹ 390<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>

                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Festives4} />
                                    <TbSquareDot className='dots' />
                                    <h4>Starbucks Bearista Bear</h4>
                                    <p>Adorned in a traditional festive attire our Bearista is<br />read...</p>
                                    <div className='spans'>
                                        <h3>₹ 900<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='eee'></div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <div className='eveyyone'>
                                <h4>Diwali Blend</h4>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Diwali} />
                                    <TbSquareDot className='dots' />
                                    <h4>250G Diwali Blend</h4>
                                    <p>Starbucks is celebrating Diwali the best way we<br />know how - H...</p>
                                    <div className='spans'>
                                        <h3>₹ 1100<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='eee'></div>
                        </div>
                    </TabPanel>

                    <TabPanel>

                        <div>
                            <div className='eveyyone'>
                                <h4>Festive Indulgence</h4>
                            </div>
                            <div className='background1'>
                                <div className='bckground'>
                                    <img src={Diwali1} />
                                    <TbSquareDot className='dots' />
                                    <h4>Festive Indulgence Dry Fruit and Nut<br></br>Fudge - ...</h4>
                                    <p className='tall'>"Serving size: 15g Calories per serving: refer description"</p>
                                    <p>Celebrate the festival of lights with this indulgent<br />box of ...</p>
                                    <div className='spans'>
                                        <h3>₹ 950<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Diwali2} />
                                    <TbSquareDot className='dots' />
                                    <h4>Festive Indulgence Dry Fruit and Nut<br></br>Fudge - ...</h4>
                                    <p className='tall'>"Serving size: 15g Calories per serving: refer description"</p>
                                    <p>Celebrate the festival of lights with this indulgent<br />box of ...</p>
                                    <div className='spans'>
                                        <h3>₹ 1550<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                                <div className='bckground'>
                                    <img src={Diwali3} />
                                    <TbSquareDot className='dots' />
                                    <h4>Coffee Choco Barks</h4>
                                    <p className='tall'>"Serving size: 25g Calories per serving: 145kcal"</p>
                                    <p>Experience the perfect blend of Bombay Sweet <br />Shop’s iconic c...</p>
                                    <div className='spans'>
                                        <h3>₹ 350<span className='spansss'>.00</span></h3>
                                        <button className='adds'>Add item</button>
                                    </div>
                                </div>
                            </div>
                            <div className='eee'></div>
                        </div>
                    </TabPanel>
                </Tabs>

            </div>


        </div >
    )
}

export default Order
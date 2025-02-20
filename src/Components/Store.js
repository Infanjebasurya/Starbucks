import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { BsCarFrontFill } from "react-icons/bs";


import { MdDeliveryDining } from "react-icons/md";

import "./Store.scss";

import saravanan from './Assets/Image/Screenshot 2025-02-12 204854.png'

function Store() {
  return (
    <div className="Container1">
      <div className="Container2">
        <div className="btns">
          <Link to="/">
            <button className="home-btn">Home ---</button>
          </Link>
          <button className="find-btn">Find A Store</button>
        </div>

        <div className="back">
          <div className="src">
            <input
              type="search"
              placeholder="       Find a store near you"
              className="src1"
            />
            <CiSearch className="src2" />
          </div>
          <div className="near">
            <h3>Nearby (1)</h3>
            <div className="wite">
              <img src={saravanan}></img>
              <h4>Lakshmi Mills,Coimbatore</h4>
            </div>
            <div className="hfive">
              <h5>4.79 Km away.<span>open</span></h5>
            </div>
            <div className="ico">
            <MdDeliveryDining />
            <PiForkKnifeDuotone />
            <IoWifi />
            </div>

            <div className="show">
            <BsCarFrontFill className="cars"/>
            <p>15 mins drive</p>
            <button>Show Directions</button>
            </div>


          </div>
        </div>
      </div>
      <div>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.672987606323!2d80.15846954067183!3d12.982307599336137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1739340553888!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Store;

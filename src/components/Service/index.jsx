import React from 'react'

import main from './img/sermain.png'

import logo1 from './img/serlogo1.png'
import logo2 from './img/serlogo2.png'
import logo3 from './img/serlogo3.png'
import logo4 from './img/serlogo4.png'

import './services.css'
import Creative from './Creative'
const Service = () => {
    return (
        <div className="service">
            
            <div className="container">
            <div className="text-center">
            <div className="title">
                     <h1><span className="red">Our</span>Services</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit cum ad maxime voluptatem quasi nostrum labore omnis, debitis sint impedit pariatur veniam aperiam deserunt!</p>
                     </div>
            </div> 
               <div className="service-container">
               <div className="img"><img src={main} alt=""/></div>
                <div className="service-content">
               <div className="logos">
                <div><img src={logo1} alt=""/>
                    <img src={logo2} alt=""/></div>
                <div>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                </div>
               </div>
                </div>
        </div>
        </div>

        <Creative />
        </div>
    )
}

export default Service

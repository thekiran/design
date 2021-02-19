import React from 'react'

import main from './img/sermain.png'

import logo1 from './img/serlogo1.png'
import logo2 from './img/serlogo2.png'
import logo3 from './img/serlogo3.png'
import logo4 from './img/serlogo4.png'

import './services.css'
import Creative from './Creative'
const Service = ({offsetY}) => {
    return (
        <div className="service">
            
            <div className="container">
            <div className="text-center"  style={{transform:`translateY(${offsetY * -.02}px)`}}>
            <div className="title">
                     <h1><span className="red">Our</span>Services</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit cum ad maxime voluptatem quasi nostrum labore omnis, debitis sint impedit pariatur veniam aperiam deserunt!</p>
                     </div>
            </div> 
               <div className="service-container">
               <div className="img" style={{transform:`translateY(${offsetY * .01}px)`}}><img src={main} alt=""/></div>
                <div className="service-content" style={{transform:`translateY(${offsetY * -.02}px)`}}>
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

        <Creative offsetY={offsetY} />
        </div>
    )
}

export default Service

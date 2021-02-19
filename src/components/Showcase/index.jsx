import React from 'react';
import gsap from 'gsap';

import './showcase.css'

import pro from './img/proing.png'
import MeetSection from './MeetMyTeam';
const Showcase = ({offsetY}) => {
    const Ftitle = React.useRef(null)
    const Fpara = React.useRef(null)
    const FImg = React.useRef(null)
    console.log(offsetY)
    React.useEffect(()=>{
        gsap.from(Ftitle.current,{x:200,opacity:0,duration:2,scrollTrigger:Ftitle.current,})

        gsap.from(Fpara.current,{x:100,scrollTrigger:Fpara.current, opacity:0,duration:3})
  
        gsap.from(FImg.current,{x:-100,scrollTrigger:FImg.current, opacity:0,duration:4})
  
    },[])

    return (
        <div className="showcase">
           <div className="container">
               <div className="showcase-first-container">
               <div className="img" style={{transform:`translateY(${offsetY * .07}px)`}}><img ref={FImg} src={pro} alt=""/></div>
                <div className="showcase-first-content"  style={{transform:`translateY(${offsetY * -.01}px)`}}>
                 <div className="title">
                     <h1 ref={Ftitle}>Design <span className="red">Process</span></h1>
                     </div>
                     <div ref={Fpara} > 
                     <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, magnam. Mollitia quo rem deserunt et, ducimus autem, labore voluptatem facilis accusantium necessitatibus, corporis inventore at libero explicabo suscipit sequi fuga saepe. Necessitatibus dignissimos pariatur dicta soluta, animi fugit a quaerat!</p>
                     <button className="btn btn-sub">More About</button>
                     </div>
               </div> 
                </div>
           </div>
           <MeetSection offsetY={offsetY} />
        </div>
    )
}

export default Showcase 

import React from 'react';
import gsap from 'gsap';

import './showcase.css'

import meet from './img/meetimg.png'
const MeetSection = ({offsetY}) => {
    const Stitle = React.useRef(null)
    const Spara = React.useRef(null)
    const SImg = React.useRef(null)
    let duration = 1
    let delay = 2
    React.useEffect(() => {
        gsap.from(Stitle.current, { x: 400, opacity: 0, duration, scrollTrigger: Stitle.current,delay })

        gsap.from(Spara.current, { x: 200, scrollTrigger: Spara.current, opacity: 0, duration,delay })

        gsap.from(SImg.current, { x: -200, scrollTrigger: SImg.current, opacity: 0, duration,delay })

    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="showcase-sec-container">
                     <div className="showcase-sec-content" style={{transform:`translateY(${offsetY * .1}px)`}}>
                        <div className="title">
                            <h1 ref={Stitle}>Meet <span className="red">My</span> Team</h1>
                        </div>
                        <div ref={Spara} >
                            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, magnam. Mollitia quo rem deserunt et, ducimus autem, labore voluptatcipit sequi fuga saepe. Necessitatibus dignissimos pariatur dicta soluta, animi fugit a quaerat!</p>
                            <button className="btn btn-sub">Meet Here</button>
                        </div>
                    </div> 
                     <div className="img" style={{transform:`translateY(${offsetY * -.03}px)`}}><img ref={SImg} src={meet} alt="" /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MeetSection 

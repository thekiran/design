import React from 'react';
import gsap from 'gsap';
 
import meet from './img/c-des.png'

const Creative = () => {

    const Stitle = React.useRef(null)
    const Spara = React.useRef(null)
    const SImg = React.useRef(null)

    React.useEffect(() => {
        gsap.from(Stitle.current, { x: 200, opacity: 0, duration: 2, scrollTrigger: Stitle.current, })

        gsap.from(Spara.current, { x: 100, scrollTrigger: Spara.current, opacity: 0, duration: 3 })

        gsap.from(SImg.current, { x: -100, scrollTrigger: SImg.current, opacity: 0, duration: 4 })

    }, [])

    return (      <div style={{background:"#fff"}}>
        <div className="container">
            <div className="showcase-sec-container">
                 <div className="showcase-sec-content">
                    <div className="title">
                        <h1 style={{fontSize:'1.7em'}} ref={Stitle}><span className="red">Creative</span>&nbsp;Designer</h1>
                    </div>
                    <div ref={Spara} >
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, magnam. Mollitia quo rem deserunt et, ducimus autem, labore voluptatcipit sequi fuga saepe. Necessitatibus dignissimos pariatur dicta soluta, animi fugit a quaerat!</p>
                        <button className="btn btn-sub">Meet Here</button>
                    </div>
                </div> 
                 <div className="img"><img style={{width:'70%',marginLeft:'auto',display:'block'}}ref={SImg} src={meet} alt="" /></div>
            </div>
        </div>
    </div> );
}
 
export default Creative;
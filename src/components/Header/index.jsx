import hero from './img/hreo.png'
import logo1 from './img/logo1.png'
import logo2 from './img/logo2.png'
import logo3 from './img/logo3.png'

import './header.css'
const Header = () => <div className="header">
    <div className="container">
        <div className="main-header">
            <div className="header-content">
                <div className="head-cont">
                    <h1>Design<span>er</span> </h1>
                    
                    <h4>
                        <ul>
                            <li>
                                <span>
                                Strategy
                                </span>
                                </li>
                            <li>
                                <span>
                                Design
                                </span></li>
                            <li>
                                <span>
                                Development
                                </span></li>
                        </ul>  </h4>
                    {/* <p>A different messaging experience which focus on <br /> users'privacy, coupled with all the features you'd <br />expect.</p> */}

                    <div className="btns">
                        {/* <div className="btn btn-blue"><button>Download</button></div> */}
                        <a href="/"><div className="btn btn-clear"><button >Contact</button></div></a>
                    </div>
                    
                    <div className="btns">
                        <img src={logo1} alt=""/>
                        <img src={logo2} alt=""/>
                        <img src={logo3} alt=""/>
                    </div>
                </div>
                <div className="head-pops">
                {/* <img src={pop1} /> */}
                    </div>
            </div>
            <div className="header-hero">
                <img src={hero} />
                </div>

        </div>
    </div>
</div>

export default Header

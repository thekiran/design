import React from 'react'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Service from './components/Service';

function App() {
   const [offsetY, setOffsetY] = React.useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset) 

  React.useEffect(()=>{
    window.addEventListener("scroll",handleScroll) 
    return () => window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="App"  style={{transform:`translateY(${offsetY * 0.2}px)`}}>
      <Navbar />
      <Header offsetY={offsetY}/>
      <Showcase offsetY={offsetY} />
      <Service offsetY={offsetY} />
      <div className="footer">
      <div className="footer-content"> 
      <div className="footer-body">
                    <div className="copy">&copy 2021 All Rights Reserved.</div>
                    <span>Terms&Conditions</span>
                    <span>Privacy policy</span>
                    <span>Blog</span>
                    <span>Contact us</span>
                </div></div>
      </div>
    </div>
  );
}

export default App;

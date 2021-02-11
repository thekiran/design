import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Showcase />
      <Service />
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

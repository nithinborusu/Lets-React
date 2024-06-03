import React from "react"
import ReactDOM from "react-dom/client"
import './Header.css'
import logo from './icon.png'
import profile from './profile.png'


const Header = () => {
    return (
      <header className="header">
        <nav className="nav">
          <img src={logo} alt="Logo" className="img-logo" />
          <input type="text" className="input" placeholder="Type something..." />
          <img src={profile} alt="profile" className="img-profile" />
        </nav>
      </header>
    );
  };

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<Header/>);
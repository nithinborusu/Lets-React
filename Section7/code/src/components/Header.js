import logo from '../../logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header=()=>{
    const [btnName, setbtnName] = useState('Login');
    return (
        <div className='header'>
            <div className='logoimg'>
                <img className='logo' alt="logo" src={logo}></img>
            </div>
            <div className='navitems-container'>
                <ul className='navitems'>
                    <li className='item'><Link to="/home">Home</Link></li>
                    <li className='item'><Link to="/about">About</Link></li>
                    <li className='item'><Link to="/contact">Contact</Link></li>
                    <li className='item'><Link to="/">Cart</Link></li>

                    <li>
                        <button className='btn'
                        
                        onClick={()=>{
                           btnName =='Login'?
                           setbtnName('Logout'):
                           setbtnName('Login')
                        }}
                        
                        >{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
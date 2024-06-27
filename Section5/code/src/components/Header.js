import logo from '../../logo.png'
const Header=()=>{
    return (
        <div className='header'>
            <div className='logoimg'>
                <img className='logo' alt="logo" src={logo}></img>
            </div>
            <div className='navitems-container'>
                <ul className='navitems'>
                    <li className='item'>Home</li>
                    <li className='item'>About</li>
                    <li className='item'>Contact</li>
                    <li className='item'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
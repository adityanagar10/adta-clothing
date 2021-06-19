import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';

export default ()=>{
    return(
        <div className="header">
            <Link className = "logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                <Link className="option" to= "/signup">SIGN IN</Link>
            </div>
        </div>
    )
}


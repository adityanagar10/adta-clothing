import React from 'react';
import {connect} from 'react-redux';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assests/crown.svg';

const Header = ({currentUser}) =>{
    return(
        <div className="header">
            <Link className = "logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick = {() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className="option" to= "/signup">SIGN IN</Link>
                }
                <CartIcon />    
            </div>
            <CartDropdown />
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);
    



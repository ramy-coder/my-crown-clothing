import {Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

import { UserContext } from "../../context/user.context";
import Carticon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

    import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const {currentUser,setCurrentUser} = useContext(UserContext);
    console.log("Inside Navigation",currentUser);
    const {isCartOpen} = useContext(CartContext)

    const SignOutHandler = async() => {
        
        await signOutUser();
        setCurrentUser(null);
    }

    // <Link to='/checkout'>
    // checkout
    // </Link>
    return (
    <Fragment>
        <div className = 'navigation'>
            <Link className = 'logo-container' to = '/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className = 'nav-links-container'>
                <Link className = 'nav-link' to = '/shop'>
                      SHOP
                </Link>
                {
                    currentUser ? (<span className="nav-link" onClick={SignOutHandler}>Sign Out</span>) : ( <Link className = 'nav-link' to = '/auth'>SIGN IN</Link>)
                }
               <Carticon/>
             
             </div>


             {isCartOpen && <CartDropdown/>}
            </div>  
          <Outlet />
    </Fragment>
  ); 
  };

  export default Navigation;
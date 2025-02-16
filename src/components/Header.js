import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {user} = useContext(UserContext);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <li>Contact Us</li>
                    <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
                    <Link to="/signin" className="nav-link">Login</Link>
                    <li className="font-bold">{user}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./index.css";

const Navbar = ({cartListLength, setSearchInputValue}) => {
    const [inputValue, setInputValue] = useState("");
    const [showCart, setShowCart] = useState(false);

    const onHandleInput = (e) => setInputValue(() => e.target.value);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setSearchInputValue(() => inputValue);
    };


    const cartTrigger = () => {
        setShowCart(!showCart);
    };

  
    return( 
        <div className="Navbar"> <ul className="Navbar_list">
            <li className="Navbar_list_item">Home</li>
            <li className="Navbar_list_item">Contact us</li>
            <li className="Navbar_list_item">About us</li>
            </ul>
            <form onSubmit= {onHandleSubmit}className="Navbar__Form">
                <input 
                value={inputValue}
                onChange={onHandleInput}
                className="Navbar_form_Input"
                type="text"
                placeholder="cerca una categoria..." />
            </form>
            <div className = "Navbar_Cart">
                <p><AiOutlineShoppingCart showCart={showCart}/></p>
            </div>
        </div>
    );
};


export default Navbar;
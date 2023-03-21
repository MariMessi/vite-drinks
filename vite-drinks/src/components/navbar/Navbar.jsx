import { GiSwapBag } from "react-icons/gi";
import "./index.scss";

const Navbar = () => {

    return(
        <div className="Navbar">
            <ul>
                <li>Shop</li>
                <li>Info</li>
                <li>Contacts</li>
                <li><GiSwapBag /></li>
            </ul>

        </div>
    )
}

export default Navbar;
import { GiSwapBag } from "react-icons/gi";
import style from "./index.module.scss";

const Navbar = () => {

    return(
        <div className={style.Navbar}>
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
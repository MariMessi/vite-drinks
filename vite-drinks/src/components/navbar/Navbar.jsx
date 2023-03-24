import style from "./index.module.scss";

const Navbar = ({ setReservationVisibility }) => {
    const onHandleClick = () => setReservationVisibility(true);

    return(
        <div className={style.Navbar}>
            <ul>
                <li>Shop</li>
                <li>Info</li>
                <li>Contacts</li>
                
            </ul>
         <button onClick={onHandleClick}>Prenota qui</button>
        </div>
    )
}

export default Navbar;
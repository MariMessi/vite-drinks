import styles from "./index.module.scss";
import { ImWink2 } from "react-icons/im";

const Popup = () => {

    return(
        <div className={styles.Popup}>
             <h3 className={styles.message}>Benvenuto all'Occult Coffee</h3>
             <p>dove di Occult abbiamo solo il nome </p>
             <ImWink2 />

        </div>
    )
}

export default Popup;
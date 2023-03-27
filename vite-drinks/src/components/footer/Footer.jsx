import styles from "./index.module.scss";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";

const Footer=() => {
  return (
    <div className={styles.Footer}>
        <p>Seguici sui nostri social</p>
        <ul>
            <li><AiFillInstagram /></li>
            <li><AiFillTwitterCircle /></li>
            <li><AiFillFacebook /></li>
        </ul>
    </div>
  )

}

export default Footer;
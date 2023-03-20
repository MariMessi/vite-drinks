
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai"

import "./index.css";

const Footer = () => {
    return(
        <div className="Footer">
            <ul className="Footer_list">Contact us 
                <li className="Footer_list_item"><AiOutlineInstagram /></li>
                <li className="Footer_list_item"><AiOutlineFacebook /></li>
                <li className="Footer_list_item"><AiOutlineTwitter /></li>
            </ul>

        </div>
    )
}

export default Footer;
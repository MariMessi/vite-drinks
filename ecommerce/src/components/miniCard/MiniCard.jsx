import "./index.css";

const MiniCard = ({ imgSrc, imgAlt }) => {
 const onHandleClick = () => window.open(imgSrc, "_blank");

    return(
        <div className="MiniCard">
            <img className ="MiniCard_img"onClick = {onHandleClick} src={imgSrc} alt={imgAlt} />
        </div>
    )
}

export default MiniCard;
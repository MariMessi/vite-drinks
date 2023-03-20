import { useState } from "react";
import { shortDescription } from "../../utils/func";
import "./index.css";

const Card = ({ productData }) => {
    const [cartList, setCartList] = useState([]);
 
 
    const onHandleAddCart = () => {
        const localStorageCartItems =
        JSON.parse(localStorage.getItem("cartList")) ||[];

        const isProductInsideCart = !localStorageCartItems.find(
            (product) => product.id === productData.id);

       setCartList((prev) =>
       !!prev.find((product) => product.id === productData.id)
       ?[...prev]
       : [...prev, productData]
    );
    if (isProductInsideCart) {
        localStorage.setItem(
            "cartList",
            JSON.stringify([...localStorageCartItems, productData])
        );
        alert(`${productData.title} aggiunto al carrello`);
    } else {
        alert(`${productData.title} esiste già dentro il carrello`);
    }
}
    return (
        <div className="cardbBox">
        <div className="Card">
            <img className="Card_img" src={productData.thumbnail}
            alt = {productData.title} />
            <div className="Card_text">
            <h2 className="title">{productData.title}</h2>
                <p>{shortDescription(productData.description)}</p>
                <p>{productData.price} $</p>
            </div>
            <button className="addCartButton" onClick={onHandleAddCart}>Add to cart</button>
        </div>
        </div>
    );
};

export default Card;
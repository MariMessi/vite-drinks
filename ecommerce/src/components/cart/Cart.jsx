import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./index.css";


const Cart = () => {
    const [cartList, setCartList ] = useState(
        JSON.parse(localStorage.getItem("cartList")) || []
    );

    const localStorageCartList = 
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

    const onHandleClick = (cartProduct) => {
        const filteredCartList = cartList.filter(
            (product) => product.id !== cartProduct.id
        );
        setCartList(() => filteredCartList);
        localStorage.setItem("cartList", JSON.stringify(filteredCartList));
    }


    return(
        <div className="Cart">
            {!cartList.length ? (
                <h1>Inserire articoli...</h1> 
            ) : (
                <div className="Cart_list">
                    {cartList.map((product) => (
                        <div className="Cart_product" key = {product.id}>
                            <img className="Cart__product_img" src={product.thumbnail} alt={product.title} />
                            <h3 className="Product_name">{product.title}</h3>
                            <p className="Product_price">{product.price}$</p> 
                            
                            <button onClick={() => onHandleClick(product)} className="delete_cart_product"><MdDeleteOutline />
                            </button>
                            </div>
                    ))}
                    </div>
            )}
               
           
           
        </div>
    )
}

export default Cart;
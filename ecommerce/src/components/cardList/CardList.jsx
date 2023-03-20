import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import "./index.css";

const CardList = ({ title, endpoint }) => {
    const [productList, setProductList] = useState ([]);

    useEffect(() => {
        GET(endpoint).then((data) => setProductList(() => data.products));
    },  [])
    return( 
        <div className="CardList">
            <h2>{title}</h2>
            <div className = "CardList_list">
                {productList.map((product) => (
                    <Card productData={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
import { useEffect, useState } from "react";
import "./index.scss";

const CocktailCard = ({ data }) => {
    const [infoCocktail, setInfoCocktail] = useState({})
 useEffect (() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + data.idDrink).then(res => res.json()).then(data => setInfoCocktail(data.drinks[0]))
 }, [])
    return(
        <div className="CocktailCard">
            <img src={data.strDrinkThumb} alt= {data.strDrink} />
            <div className = "CocktailCard_text">
                <h2>{data.strDrink}</h2>
                <ul>
                    <li> {infoCocktail.strIngredient1} - {infoCocktail.strMeasure1}</li>
                    <li> {infoCocktail.strIngredient2} - {infoCocktail.strMeasure2}</li>
                    <li> {infoCocktail.strIngredient3} - {infoCocktail.strMeasure3}</li>
                </ul>
            </div>

        </div>
    );
}; 

export default CocktailCard;
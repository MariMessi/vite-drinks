import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const CocktailCard = ({ data }) => {
    const [infoCocktail, setInfoCocktail] = useState({})
 useEffect (() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + data.idDrink).then(res => res.json()).then(data => setInfoCocktail(data.drinks[0]))
 }, [])
    return(
        <div className={styles.CocktailCard}>
            <img src={data.strDrinkThumb} alt= {data.strDrink} />
            <div className = {styles.text}>
                <h2>{data.strDrink}</h2>
            </div>

        </div>
    );
}; 

export default CocktailCard;
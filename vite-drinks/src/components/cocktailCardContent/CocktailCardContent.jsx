import CocktailCard from "../cocktailCard";
import styles from "./index.module.scss";

const CocktailCardContent = ( {data, title, setCocktailDetailsContext, } ) => {

    return( 

        
       
           
            <div className={styles.CocktailCardContent}>
    
            {data.map((alcoholic) => (
                <CocktailCard data= {alcoholic} setCocktailDetailsContext= {setCocktailDetailsContext}key={data.idDrink}/>
            ))}

        </div>
    )
}

export default CocktailCardContent;
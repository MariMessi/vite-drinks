import CocktailCard from "../cocktailCard";
import "./index.scss";

const CocktailCardContent = ( {data, setCocktailDetailsContext} ) => {

    return( 
        <div className="CocktailCardContent">
            {data.map((alcoholic) => (
                <CocktailCard data= {alcoholic} setCocktailDetailsContext= {setCocktailDetailsContext}key={data.idDrink}/>
            ))}

        </div>
    )
}

export default CocktailCardContent;
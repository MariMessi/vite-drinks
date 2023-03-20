import CocktailCard from "../cocktailCard";
import "./index.scss";

const CocktailCardContent = ( {data} ) => {

    return( 
        <div className="CocktailCardContent">
            {data.map((alcoholic) => (
                <CocktailCard data= {alcoholic}/>
            ))}

        </div>
    )
}

export default CocktailCardContent;
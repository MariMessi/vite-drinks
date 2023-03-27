import "./index.scss";


const CocktailDetails = ({ data, setCocktailDetailsContext }) => {

    const onHandleClick = () => 
    setCocktailDetailsContext((prev) => ({
        ...prev,
        isVisible: false,
    }));

    return (
        <div className="CocktailDetails">
            <div className="CocktailDetails_text">
                <h1>{data.strDrink}</h1>
                <span>{data.strCategory}</span>
                <span>{data.strAlcoholic}</span>
            </div>
            <div className="CocktailDetails_instructions">
                <ul>
                    <li>{data.strIngredient1} - {data.strMeasure1}</li>
                    <li>{data.strIngredient2} {data.strMeasure2}</li>
                    <li>{data.strIngredient3} {data.strMeasure3}</li>
                    <li>{data.strIngredient24} {data.strMeasure4}</li>
                </ul>
                <p>{data.strInstructions}</p>
            </div>
            <div className="CocktailDetails_img">
                <img src={data.strDrinkThumb} alt={data.strDrink} />
            </div>
            
            
            
            <button onClick={onHandleClick}></button>
       
        </div>
    )
}

export default CocktailDetails;
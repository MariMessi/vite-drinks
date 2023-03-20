import "./index.scss";

const Hero = ({ setCocktailCategory }) => {

    const onHandleClick = (value) => {
        setCocktailCategory(value)
    }

    return (
        <div className="Hero">
            <img src="https://cdn.dribbble.com/users/1064225/screenshots/16797379/media/27b4afd664c49e787800f1cf74a58525.jpg?compress=1&resize=800x600&vertical=top" alt="Alchemy-coffee" />
            <div className="Hero_text">            
            <ul>
                <li onClick={() => onHandleClick("Alcoholic")}>Alcholic</li>
                <li onClick={() => onHandleClick("Non_Alcoholic")}>Non-Alcholic</li>
            </ul>
            </div>

        </div>
    );
};

export default Hero;
import styles from "./index.module.scss";

const Hero = ({ setCocktailCategory }) => {

    const onHandleClick = (value) => {
        setCocktailCategory(value)
    }

    return (
        <div className={styles.Hero}>
            <img src="https://cdn.dribbble.com/users/1064225/screenshots/16797379/media/27b4afd664c49e787800f1cf74a58525.jpg?compress=1&resize=800x600&vertical=top" alt="Alchemy-coffee" />
            <div className={styles.text}>            
            <ul>
                <li onClick={() => onHandleClick("/filter.php?a=Alcoholic")}>Alcholic</li>
                <li onClick={() => onHandleClick("/filter.php?a=Non_Alcoholic")}>Non-Alcholic</li>
            </ul>
            </div>

        </div>
    );
};

export default Hero;
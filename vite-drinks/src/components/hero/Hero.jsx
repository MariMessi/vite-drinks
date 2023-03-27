import styled from "styled-components";


const HeroWrapper = styled.div`
margin-left:-40px;
height: 500px;
width: 97vw;
object-fit: cover;
position: relative;
`;

const HeroImg = styled.img`
height: 400px;
width: 97vw;
object-fit: cover;
`;

const HeroText = styled.div`
font-family: $primary-font;
background-color: $dark-color ;
position: absolute;
margin-top: 20px;
position: absolute;
cursor: pointer;
width: 93vw;
color: #fbf9ec;
`;
const HeroList = styled.ul `
font-family: $primary-font;
display: flex;
justify-content: space-between;
align-items: center;
gap: 10vw;
list-style-type: none;

& li {
    font-family: $primary-font;
    cursor: pointer;
}


li:hover{
 text-decoration: underline;
}

&:active{
 background-color: $white-color;
}

`;



 const Hero = ({ setCocktailCategory }) => {

    const onHandleClick = (value) => {
       setCocktailCategory(value)
     }

    return (
        <HeroWrapper>

             <HeroImg src="https://cdn.dribbble.com/users/1064225/screenshots/16797379/media/27b4afd664c49e787800f1cf74a58525.jpg?compress=1&resize=800x600&vertical=top" alt="Alchemy-coffee" />
            <HeroText>
                <HeroList>
                <li onClick={() => onHandleClick("/filter.php?a=Alcoholic")}>Alcholic</li>
                <li onClick={() => onHandleClick("/filter.php?a=Non_Alcoholic")}>Non-Alcholic</li>
                </HeroList>
            </HeroText>        

        </HeroWrapper>
    );
 };

 export default Hero;
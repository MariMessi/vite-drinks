import { useState, useEffect } from 'react';
import { GET } from './utils/http';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CocktailCardContent from './components/cocktailCardContent';
import CocktailDetails from './components/cocktailDetails';
import styles from './App.module.scss';


function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailCategory, setCocktailCategory] = useState("Alcoholic");
  const [CocktailDetailsContext, setCocktailDetailsContext] = useState({
    isVisible: false,
    payload: {},
  });

useEffect(() => {
  GET("/filter.php?a=Alcoholic").then(({ drinks }) => {
    setCocktailList(() => drinks);
  })
}, []);


  return (
    <div className={styles.App}>
      <Navbar />
      {CocktailDetailsContext.isVisible ? (
        <CocktailDetails 
        data={setCocktailDetailsContext.payload}
        setCocktailDetailsContext = {setCocktailDetailsContext}
        />
      ) : (
        <>
      <Hero setCocktailCategory= {setCocktailCategory}/>
      <CocktailCardContent data={cocktailList}  setCocktailDetailsContext={setCocktailDetailsContext}/>
      </>  
)}
    </div>
  )
}

export default App

// filter.php?a=Alcoholic




import { useState, useEffect } from 'react';
import { GET } from './utils/http';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CocktailCardContent from './components/cocktailCardContent';
import './App.scss'


function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailCategory, setCocktailCategory] = useState("Alcoholic");

useEffect(() => {
  GET("/filter.php?a=Alcoholic").then(({ drinks }) => {
    setCocktailList(() => drinks);
  })
}, []);


  return (
    <div className="App">
      <Navbar />
      <Hero setCocktailCategory= {setCocktailCategory}/>
      <CocktailCardContent data={cocktailList} />
    </div>
  )
}

export default App


// filter.php?a=Alcoholic



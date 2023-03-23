import { useState, useEffect } from 'react';
import { GET } from './utils/http';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CocktailCardContent from './components/cocktailCardContent';
import CocktailDetails from './components/cocktailDetails';
import styles from './App.module.scss';
import Popup from './components/popup';
import Reservations from './components/reservations';


function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [cocktailCategory, setCocktailCategory] = useState("Alcoholic");
  const [isPopupvisible, setPopuoVisibility] = useState(true);
  const [isReservationVisible, setReservationVisibility] = useState(false)
  const [CocktailDetailsContext, setCocktailDetailsContext] = useState({
    isVisible: false,
    payload: {},
  });




  useEffect(() => { 
    setTimeout(() => 
      setPopuoVisibility(false), 2000)}, []);
  



useEffect(() => {
  GET("/filter.php?a=Alcoholic").then(({ drinks }) => {
    setCocktailList(() => drinks);
  })
}, []);


  return (
    <div className={styles.App}>
  {isPopupvisible ? <Popup /> : null} 
      <Navbar setReservationVisibility={setReservationVisibility}/>
      {CocktailDetailsContext.isVisible ? (
        <CocktailDetails 
        data={setCocktailDetailsContext.payload}
        setCocktailDetailsContext = {setCocktailDetailsContext}
        />
      ) : (
        <>
        {isReservationVisible && (<Reservations setReservationVisibility = {setReservationVisibility}/> )}
      <Hero setCocktailCategory= {setCocktailCategory}/>
      <CocktailCardContent data={cocktailList}  setCocktailDetailsContext={setCocktailDetailsContext}/>
      </> 
  
)}

    </div>
  )
}

export default App

// filter.php?a=Alcoholic



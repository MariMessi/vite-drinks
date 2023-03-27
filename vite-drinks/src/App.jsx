import { useState, useEffect } from 'react';
import { GET } from './utils/http';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CocktailCardContent from './components/cocktailCardContent';
import CocktailDetails from './components/cocktailDetails';
import styles from './App.module.scss';
import Popup from './components/popup';
import Reservations from './components/reservations';
import Footer from './components/footer';


function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [nonAlcoholicList, setNonAlcoholicList] = useState([]);
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


useEffect(() => {
  GET("/filter.php?a=Non_Alcoholic").then(({ drinks }) => {
    setNonAlcoholicList(() => drinks);
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
      <h3 className={styles.sectionTitle}>Cocktails</h3>
      <CocktailCardContent data={cocktailList}  setCocktailDetailsContext={setCocktailDetailsContext}/>
      <hr></hr>
      <h3 className={styles.sectionTitle}>Soft Drinks</h3>
      <CocktailCardContent data={nonAlcoholicList} />  
      <Footer />
      </> 
  
)}
     
    </div>
  )
}

export default App

// filter.php?a=Alcoholic



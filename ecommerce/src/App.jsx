import Navbar from './components/navbar';
import Hero from './components/hero';
import MiniCardList from './components/miniCardList';
import CardList from './components/cardList';
import Cart from './components/cart';
import Footer from './components/footer';
import { GET } from './utils/http';
import './App.css'
import { useState } from 'react';

function App() {

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const [isCartActive, setCartActive] = useState(false);

  const showCart = () => {
    setCartActive((prev) => !prev);
  }; 


  return (
    <div className="App">
      <Navbar />
      <Hero />
      {isCartActive ? <Cart cartList = {cartList} setCartList={setCartList}/> : null}
      
      <MiniCardList endpoint="/products"/>
      <CardList title="Smartphones" endpoint="/products/category/smartphones" />
      <CardList title="Skincare" endpoint="/products/category/skincare" />
      <Footer />
    </div>
  )
}

export default App

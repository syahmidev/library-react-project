import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from './data'
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React,{ createRef, useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity){
    setCart(cart.map(item => {
      if(item.id === book.id){
        return {
          ...item,
          quantity: +quantity
        }
      }else{
        return item
      }
    }))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  
  function removeItem(item){
    setCart(cart.filter(book => book.id !== book.id))
  }
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/books" element={<Books books={books} />}/>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
          <Route path="/cart/:id" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

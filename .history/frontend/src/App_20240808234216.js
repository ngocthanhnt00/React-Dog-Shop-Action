import './App.css';
import { Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Dogs from './components/Dogs/Dogs';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios";
function App() {
  const [allDogs, setAllDogs] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res
    }
    getData().then((res) => console.log(res))
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dogs' element={<Dogs />}></Route>
          <Route path='/checkout' element={<Cart />}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;

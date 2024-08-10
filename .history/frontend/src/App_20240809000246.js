import './App.css';
import { Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './components/Home/Home';
import Dogs from './components/Dogs/Dogs';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { get } from 'http';
function App() {
  const [allDogs, setAllDogs] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs");
      return res.data
    }
    getData().then((res) => setAllDogs(res));
    getData().catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dogs' element={<Dogs allDogs={allDogs} />}></Route>
          <Route path='/checkout' element={<Cart />}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;

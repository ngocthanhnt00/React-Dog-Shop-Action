import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Dogs from './components/Dogs/Dogs';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/dogs' element={<Dogs />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

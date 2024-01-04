
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Cart from "./components/Cart"
import { useState } from 'react';
function App() {
    
return(
    <div className='appDiv'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
);
}

export default App;

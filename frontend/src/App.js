import './App.css';
import React from'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Profile from './pages/Profile/MainPage/mainpage';

function App() {
  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/profile' element={<Profile />} />
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import './index.css';
import { Route, Router, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { CustomRouter } from './router';
import { Login } from './Pages/Login';
import { ForgotPassword } from './Pages/ForgotPassword';
import { Register } from './Pages/Register';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { HouseList } from './Pages/HouseList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route  path ="/home/*" element={<HouseList/>}></Route>
    </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

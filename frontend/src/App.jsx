import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import NavBar from './Components/nav-bar/NavBar';
import ForgotPassword from './Pages/forgotPassword/ForgotPassword';
import Exercises from './Pages/exercises/Exercises';
import Dashboard from './Pages/dashboard/Dashboard';
import NewUser from './Pages/newUser/NewUser';
import NotFound from './Pages/not-found/NotFound';
import './App.css';

function App() {
  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/exercises' element={<Exercises />} />
          {/* Cambiado newUser por register */}
          <Route path='/users' element={<NewUser />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

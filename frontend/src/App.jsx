import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import Exercises from './Pages/exercises/Exercises';
import Dashboard from './Pages/dashboard/Dashboard';
import NewUser from './Pages/newUser/NewUser';
import NotFound from './Pages/not-found/NotFound';
import './App.css';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='exercises' element={<Exercises />} />
        <Route path='newUser' element={<neWUser />} />
        <Route path='*' elelment={<NotFound />} />
      </Routes>
      {/* <Exercises /> */}
      {/* <NavBar />
      <NewUser /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;

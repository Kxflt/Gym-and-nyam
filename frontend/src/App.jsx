import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
// import Exercises from './Pages/exercises/Exercises';
// import ExerciseList from './Pages/exercises/ExerciseList';
import ValidateUser from './Pages/validate/ValidateUser';
import ForgotPassword from './Pages/forgotPassword/ForgotPassword';
import Dashboard from './Pages/dashboard/Dashboard';
import NewUser from './Pages/newUser/NewUser';
import NotFound from './Pages/not-found/NotFound';
import Profile from './Pages/profile/Profile';
import ExerciseList from './Pages/exercises/ExeciseList_2';

import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/users" element={<NewUser />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/validate" element={<ValidateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

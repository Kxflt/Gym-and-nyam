import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useError } from './context/ErrorContext';
import NavBar from './Components/Nav-bar/NavBar';
import Login from './Pages/login/Login';
import ValidateUser from './Components/Validate/ValidateUser';
import ForgotPassword from './Pages/forgotPassword/ForgotPassword';
import Dashboard from './Pages/dashboard/Dashboard';
import NewUser from './Pages/newUser/NewUser';
import NotFound from './Pages/not-found/NotFound';
import Profile from './Pages/profile/Profile';
import ExerciseList from './Pages/exercises/ExerciseList';
import Footer from './Components/Shared/Footer/Footer';
import AboutUs from './Pages/aboutUs/AboutUs';
import ErrorModal from './Components/Shared/ErrorModal/ErrorModal';
import ExerciseFavList from './Pages/favouritesPage/FavouritesPage';

import './App.css';

function App() {
    const { errorMessage, setErrorMessage } = useError();

    return (
        <>
            <div className="app">
                <NavBar />
                <ErrorModal
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/forgotPassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="/exercises" element={<ExerciseList />} />
                    <Route path="/users" element={<NewUser />} />
                    <Route path="/account" element={<Profile />} />
                    <Route path="/validate" element={<ValidateUser />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/favourites" element={<ExerciseFavList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import Game from "./navigationPage/Game";
import Navbar from "./components/Navbar";
import Error from "./mainPage/Error";
import RouterApp from "./components/RouterApp";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <RouterApp/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import Game from "./navigationPage/Game";
import Navbar from "./components/Navbar";
import Error from "./mainPage/Error";
import RouterApp from "./components/RouterApp";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <RouterApp/>
        </BrowserRouter>
    );
};

export default App;
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Game from "../navigationPage/Game";
import MainPage from "../mainPage/MainPage";
import Error from "../mainPage/Error";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/game" element={<Game/>}/>
            <Route path="/posts" element={<MainPage/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    );
};

export default RouterApp;
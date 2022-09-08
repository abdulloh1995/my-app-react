import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Game from "../navigationPage/Game";
import MainPage from "../mainPage/MainPage";
import Error from "../mainPage/Error";
import {privateRoutes, publicRoutes} from "./router/Route";
import {AuthContext} from "../context";

const RouterApp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(rout => (
                    <Route path={rout.path} element={rout.element}/>
                ))}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(rout => (
                    <Route path={rout.path} element={rout.element}/>
                ))}
            </Routes>
    );
};

export default RouterApp;
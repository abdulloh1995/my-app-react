import Game from "../navigationPage/Game";
import MainPage from "../mainPage/MainPage";
import Error from "../mainPage/Error";
import Login from "../navigationPage/Login";

export const privateRoutes = [
    {path: "/game", element: <Game/>},
    {path: "/posts", element: <MainPage/>},
    {path: "*", element: <MainPage/>}
]

export const publicRoutes = [
    {path: "/login", element: <Login/>},
    {path: "*", element: <Login/>}

]
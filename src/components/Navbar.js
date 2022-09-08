import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="container">
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <span>Posts</span>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <Link to="/posts" className="nav-link px-2 link-secondary">Posts</Link>
                    <Link to="/game" className="nav-link px-2 link-dark">Game</Link>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary" onClick={logout}>LogOut</button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
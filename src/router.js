import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import MoviesDetail from "./pages/MoviesDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/movies/:moviesid",
        element : <MoviesDetail />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    }
])

export default Router;
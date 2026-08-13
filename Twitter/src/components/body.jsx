import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import HomePage from "./homePage"
import Login from './login';
import MyProfile from './profile'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <HomePage></HomePage>
        }, {
            path: "login",
            element: <Login></Login>
        }, {
            path: "profile",
            element: <MyProfile/>
        }
    ])
    return (
        <RouterProvider router={appRouter}></RouterProvider>
    )
}

export default Body

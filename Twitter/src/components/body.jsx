import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import HomePage from "./homePage"
import Login from './login';
import MyProfile from './profile'
import Feed from './feed';
import Explore from "./explore"
import Notifications from './notifications';
import Messages from './messages'
import Bookmarks from './bookmarks'
import Trending from './trending'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <HomePage></HomePage>,
            children: [
                {
                    path: "/",
                    element: <Feed></Feed>
                }, {
                    path: "/profile",
                    element: <MyProfile></MyProfile>
                }, {
                    path: "/explore", 
                    element: <Explore></Explore>
                }, {
                    path: "/notifications", 
                    element: <Notifications></Notifications>
                }, {
                    path: "/messages", 
                    element: <Messages></Messages>
                }, {
                    path: "/bookmarks", 
                    element: <Bookmarks></Bookmarks>
                }, {
                    path: "/trending", 
                    element: <Trending></Trending>
                }
            ]
        }, {
            path: "/login",
            element: <Login></Login>
        }
    ])
    return (
        <RouterProvider router={appRouter}></RouterProvider>
    )
}

export default Body

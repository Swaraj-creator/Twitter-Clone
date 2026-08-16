import React from 'react'
import LeftSideBar from './leftSideBar'
import Feed from './feed'
import RightSideBar from './rightSideBar'
import { Outlet, useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();
  const isMessages = location.pathname === "/messages"

  return (
    <>
      <LeftSideBar></LeftSideBar>
      <Outlet></Outlet>
      {!isMessages && <RightSideBar></RightSideBar>}
    </>
  )
}

export default HomePage;

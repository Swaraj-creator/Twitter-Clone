import React from 'react'
import LeftSideBar from './leftSideBar'
import Feed from './feed'
import RightSideBar from './rightSideBar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <LeftSideBar></LeftSideBar>
      <Outlet></Outlet>
      <RightSideBar></RightSideBar>
    </>
  )
}

export default HomePage;

import React from 'react'
import LeftSideBar from './leftSideBar'
import Feed from './feed'
import RightSideBar from './rightSideBar'

const homePage = () => {
  return (
    <>
      <LeftSideBar></LeftSideBar>
      <Feed></Feed>
      <RightSideBar></RightSideBar>
    </>
  )
}

export default homePage;

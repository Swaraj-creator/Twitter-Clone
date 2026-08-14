import React from 'react'
import { GoHome, GoHomeFill, GoHash } from "react-icons/go";
import { FaHashtag, FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { IoNotificationsOutline, IoNotifications } from "react-icons/io5";
import { FaRegPaperPlane, FaPaperPlane } from "react-icons/fa";
import { PiFireFill, PiFireLight } from "react-icons/pi";
import { RiAccountCircleFill, RiAccountCircleLine, } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { HiUser, HiOutlineUser } from "react-icons/hi2";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const activePage = (t) => {

  }
  return (
    <>
    <div className="navMain">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navBox">
          <Link to="/" className="navs active" onClick={activePage(this)}>
            <div><GoHomeFill className='text-2xl'/><p className="ml-7">Home</p></div>
          </Link>
          <Link to="/explore" className="navs" onClick={activePage(this)}>
            <div><GoHash className='text-2xl'/><p className="ml-7">Explore</p></div>
          </Link>
          <Link to="/notifications" className="navs" onClick={activePage(this)}>
            <div><IoNotificationsOutline className='text-2xl'/><p className="ml-7">Notifications</p></div>
          </Link>
          <Link to="/messages" className="navs" onClick={activePage(this)}>
            <div><FaRegPaperPlane className='text-xl'/><p className="ml-7">&nbsp;Messages</p></div>
          </Link>
          <Link to="/bookmarks" className="navs" onClick={activePage(this)}>
            <div><FaRegBookmark className='text-xl'/><p className="ml-7">&nbsp;Bookmark</p></div>
          </Link>
          <Link to="/trending" className="navs" onClick={activePage(this)}>
            <div><PiFireLight className='text-2xl'/><p className="ml-7">Trending</p></div>
          </Link>
          <Link to="/profile" className="navs" onClick={activePage(this)}>
            <div><HiOutlineUser className='text-2xl'/><p className="ml-7">Profile</p></div>
          </Link>
          <Link to="/" className="navs" onClick={activePage(this)}>
            <div><CgMoreO className='text-xl'/><p className="ml-7">&nbsp;More</p></div>
          </Link>
          <button className="tweetBtn">Tweet</button>
      </div>
    </div>
    </>
  )
}

export default LeftSideBar;

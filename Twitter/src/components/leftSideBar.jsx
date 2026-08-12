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

const leftSideBar = () => {
  return (
    <>
    <div className="navMain">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navBox">
          <div className="navs active"><GoHomeFill className='text-2xl'/><p className="ml-8">Home</p></div>
          <div className="navs"><GoHash className='text-2xl'/><p className="ml-8">Explore</p></div>
          <div className="navs"><IoNotificationsOutline className='text-2xl'/><p className="ml-8">Notifications</p></div>
          <div className="navs"><FaRegPaperPlane className='text-xl'/><p className="ml-8">Messages</p></div>
          <div className="navs"><FaRegBookmark className='text-xl'/><p className="ml-8">Bookmark</p></div>
          <div className="navs"><PiFireLight className='text-2xl'/><p className="ml-8">Trending</p></div>
          <div className="navs"><HiOutlineUser className='text-2xl'/><p className="ml-8">Profile</p></div>
          <div className="navs"><CgMoreO className='text-xl'/><p className="ml-8">More</p></div>
          <button className="tweetBtn">Tweet</button>
      </div>
    </div>
    </>
  )
}

export default leftSideBar;

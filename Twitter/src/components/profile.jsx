import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import Tweet from './tweet';
import '../profileBox.css'
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <>
        <div className="profileBox">
            <div className="profileNav">
                <Link to="/">
                    <span className="arrowBack">
                        <IoArrowBack />
                    </span>
                </Link>
                <p className="userName">Swaraj Kashyap</p>
                <p className="postsNum">1,234 Posts</p>
            </div>
            <div className="profileData">
                <div>
                    <div className="banner"></div>
                    <div className="pfp"></div>
                    <button className="editProfileBtn">Edit Profile</button>
                </div>
                <div>
                    <p className="userName">Swaraj Kashyap</p>
                    <p className="userHandle">@swarajKashyap</p>
                    <div className="bio">Heyy I'm a coder</div>
                    <button className="getVerifiedBtn">
                        <span><VscVerifiedFilled></VscVerifiedFilled></span>
                        Get Verified
                    </button>
                </div>
                <p className="joinedDate">
                    <span><LuCalendarDays></LuCalendarDays></span>
                    Joined July 2026
                    <span><IoIosArrowForward /></span>
                </p>
                <div>
                    <span className="followersList">
                        <span>24</span>
                        Followers
                    </span>
                    <span className="followingList">
                        <span>290</span>
                        Following
                    </span>
                </div>
            </div>
            <div className="profilePosts">
                <div className="contentTypeSelector">

                </div>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
            </div>
        </div>
    </>
  )
}

export default MyProfile

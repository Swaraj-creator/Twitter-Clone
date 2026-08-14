import React from 'react'
import { IoArrowBack } from "react-icons/io5";

const MyProfile = () => {
  return (
    <>
        <div className="profileBox">
            <div className="profileNav">
                <span className="arrowBack">
                    <IoArrowBack />
                </span>
                <p className="userName">Swaraj Kashyap</p>
                <p className="postsNum">1,234 Posts</p>
            </div>
            
        </div>
    </>
  )
}

export default MyProfile

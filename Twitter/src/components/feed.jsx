import React from 'react'
import { TbSettings2 } from "react-icons/tb";

const Feed = () => {
  return (
    <>
        <div className="feedBox">
            <div className="createPost">
                <div className="feedFromSelector">
                    <div className="forYou active">For You<span></span></div>
                    <div className="following">Following<span></span></div>
                </div>
                <div className="settingsBtn"><TbSettings2 /></div>
                <div className="createPostArea">
                    
                </div>
            </div>
            <div className="feed">

            </div>
        </div>
    </>
  )
}

export default Feed
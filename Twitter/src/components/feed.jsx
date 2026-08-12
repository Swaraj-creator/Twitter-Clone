import React from 'react'
import { TbSettings2, TbGif } from "react-icons/tb";
import { RxImage } from "react-icons/rx";
import { MdOutlineGifBox, MdOutlineEmojiEmotions, MdSchedule } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import Tweet from './tweet';

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
                    <div className="profilePic">
                        <img src="https://i.pinimg.com/736x/2b/da/a5/2bdaa5be4e74c169603f18cec36f594c.jpg" alt="" />
                    </div>
                    <div className="inputArea">
                        <textarea name="postContent" id="postContent" onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = `${e.target.scrollHeight}px`;
                            if(document.getElementById("postContent").value.trim() != "" && document.getElementById("postContent").value.trim() != " ") {
                                document.querySelector(".placeHolder").style.display = "none";
                            } else {
                                document.querySelector(".placeHolder").style.display = "block";
                            }
                        }}></textarea>
                        <p className="placeHolder">What is Happening?</p>
                        <div className="optionsPanel">
                            <div className="options">
                                <span><RxImage /></span>
                                <span><TbGif /></span>
                                <span><BiPoll></BiPoll></span>
                                <span><MdOutlineEmojiEmotions></MdOutlineEmojiEmotions></span>
                                <span><MdSchedule></MdSchedule></span>
                                <span><SlLocationPin></SlLocationPin></span>
                            </div>
                            <button onClick={() => {}}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feed">
                <Tweet></Tweet>
            </div>
        </div>
    </>
  )
}

export default Feed
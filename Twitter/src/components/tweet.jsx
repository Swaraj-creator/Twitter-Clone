import React from 'react'
import { FiMoreHorizontal, FiShare, FiRepeat } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuRepeat2 } from "react-icons/lu";
import { BsChat } from "react-icons/bs";

const Tweet = () => {
  return (
    <>
        <div className="tweetBox">
            <div className="post">
                <div className="authorPfp">
                    <img src="https://i.pinimg.com/736x/2b/da/a5/2bdaa5be4e74c169603f18cec36f594c.jpg" alt="" />
                </div>
                <p>
                    <span className="authorName">Swaraj Kashyap</span>
                    <span className="verificationBadge"></span> • <span className="authorUsername">@swarajKashyap</span> • <span className="uploadedWhen">24h ago</span>
                </p>
                <span className="moreOptions"><FiMoreHorizontal></FiMoreHorizontal></span>
                <div className="postContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa quibusdam deleniti atque dicta, natus consectetur explicabo soluta repellat illo iure. Nulla labore dolorem aut, assumenda saepe incidunt esse. Omnis, sed hic, deleniti reiciendis sequi fugiat voluptatum ea aliquid reprehenderit temporibus minus ipsa laborum quibusdam dolores nam repellat ad. Molestiae repellat a veritatis aspernatur repudiandae iusto rerum hic pariatur velit minima inventore distinctio excepturi eum ad minus, alias, praesentium eveniet dolore est qui neque. Incidunt, at non error itaque architecto fugiat explicabo unde ut modi labore reiciendis ipsum provident veniam! Nam enim illum voluptatum quidem inventore cupiditate, adipisci dolorem dolor?</div>
                <div className="attachedContentBox">

                </div>
            </div>
            <hr />
            <div className="reactArea">
                <span className="commentBtn"><BsChat></BsChat></span>
                <span className="repostBtn"><FiRepeat></FiRepeat></span>
                <span className="likeBtn"><FaRegHeart></FaRegHeart></span>
                <span className="viewsBtn"><IoStatsChart></IoStatsChart></span>
                <div className="additionalBtns">
                    <span className="saveBtn"><FaRegBookmark /></span>
                    <span className="shareBtn"><FiShare></FiShare></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tweet
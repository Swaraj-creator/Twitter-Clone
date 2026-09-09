import React from 'react'
import '../messagesBox.css'

const Messages = () => {
  return (
    <div className="messagesBox">
      <div className="chatsList">
        <h3>Your Chats</h3>
        <div>
          <input type="text" placeholder='Search for Chat...'/>
        </div>
        <div className="allChats">
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name"></p>
            <p className="chat-last-message"></p>
            <span className="chat-last-time">11:23am</span>
          </div>
        </div>
      </div>
      <div className="chatsBox">
        <div className="chatRoomInfo">
          <button className="backBtn"></button>
          <div className="chatRoomPfp"></div>
          <p className="chatRoomName">Swaraj Kashyap</p>
          <p className="chatRoomHandle">@swarajkashyap</p>
        </div>
        <div className="allMessages">
          <div className="message">
            <div className="text-content">
              <p>Heyyyyyyy! I am swaraj.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages;

import React from 'react'
import '../messagesBox.css'
import { IoArrowBack } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";

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
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
          <div className="chatUser">
            <div className="chat-user-pfp"></div>
            <p className="chat-user-name">Swaraj Kashyap</p>
            <p className="chat-last-message">Heyyyyyyy! I am swaraj.</p>
            <span className="chat-last-time">11:23am</span>
          </div>
        </div>
      </div>
      <div className="chatsBox">
        <div className="chatRoomInfo">
          <button className="backBtn"><IoArrowBack/></button>
          <div className="chatRoomPfp"></div>
          <p className="chatRoomName">Swaraj Kashyap</p>
          <p className="chatRoomHandle">@swarajkashyap</p>
        </div>
        <div className="allMessages">
          <div className="message their">
            <div className="text-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus sequi, at ducimus velit obcaecati dolor consequuntur iusto maxime ullam, saepe libero. Dolorum, et recusandae itaque nemo consequatur accusantium doloribus optio quia vel iure beatae dolores. Autem maxime unde ea debitis temporibus libero labore, expedita exercitationem adipisci at veniam velit esse ex praesentium corrupti dolor dolores quidem harum pariatur tempore itaque dolorum. Nulla, magni! Amet officiis omnis veniam accusantium et enim recusandae labore modi tempora similique eligendi molestias tenetur ipsam commodi magnam, repellendus soluta dolor ex incidunt? Aut saepe doloremque rem temporibus ut, nam reprehenderit iste sint, perspiciatis necessitatibus dolore!</p>
            </div>
          </div>
          <div className="message my">
            <div className="text-content">
              <p>Heyyyyyyy! I am swaraj.</p>
            </div>
          </div>
          <div className="message their">
            <div className="text-content">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere dolores, nisi a nesciunt assumenda sit. Incidunt quo quis recusandae!</p>
            </div>
          </div>
          <div className="message my">
            <div className="text-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corrupti culpa optio quos blanditiis ut voluptate omnis officia dignissimos ullam neque tenetur, iste delectus quod quo sed inventore suscipit voluptas pariatur nesciunt ipsa sunt saepe earum minima? Quam voluptate iure praesentium ut reprehenderit, qui architecto ea placeat illum laudantium inventore cumque accusamus doloribus beatae hic est numquam, fugiat repellat, id ducimus possimus sapiente voluptas eos! Ad, eligendi iste eveniet ipsum molestiae voluptas nam eius veritatis dignissimos accusantium tempora reprehenderit. Placeat maiores aspernatur veritatis velit id quisquam qui. Et delectus non earum, incidunt dolores modi error unde, nam est possimus cum.</p>
            </div>
          </div>
        </div>
        <div className="inputArea">
          <button className="addBtn"><IoAddCircleOutline /></button>
          <textarea placeholder='Type a message...'/>
          <button className="sendBtn">Send <span><BiSolidSend /></span></button>
        </div>
      </div>
    </div>
  )
}

export default Messages;

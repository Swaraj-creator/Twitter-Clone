import React from 'react'
import { BsSearch } from "react-icons/bs";

const RightSideBar = () => {
  return (
    <>
        <div className="rightBar">
            <div className="searchBox">
              <input type="text" id="searchInput" onInput={(e) => {
                            if(document.getElementById("searchInput").value.trim() != "" && document.getElementById("searchInput").value.trim() != " ") {
                                document.querySelector(".searchBox p").style.display = "none";
                            } else {
                                document.querySelector(".searchBox p").style.display = "block";
                            }
                        }}/>
              <span><BsSearch /></span>
              <p>Search people...</p>
              </div>
        </div>
    </>
  )
}

export default RightSideBar

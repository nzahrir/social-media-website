import React from "react";
import "./rightbar.css";
import { Cake } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/Online";
const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <Cake className="birthdayImg" />
          <span className="birthdayText">
            Pola Foster and 3 other friends share a birthday
          </span>
        </div>
        <img src="" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online
              key={u.id}
              profilePicture={u.profilePicture}
              username={u.username}
            />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Nashville</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Nashville</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">In a relationship</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Marina Weidmann</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default Rightbar;

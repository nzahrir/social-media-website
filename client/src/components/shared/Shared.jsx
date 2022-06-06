import React from "react";
import "./shared.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Shared = () => {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="sharedTop">
          <img className="sharedProfileImg" src="/assets/lego.jpeg" alt="" />
          <input placeholder="What's on your mind?" className="sharedInput" />
        </div>
        <hr className="sharedHr" />
        <div className="sharedBottom">
          <div className="sharedOptions">
            <div className="sharedOption">
              <PermMedia className="sharedIcon" />
              <span className="sharedOptionText">Photo or Video</span>
            </div>
            <div className="sharedOption">
              <Label htmlColor="DodgerBlue" className="sharedIcon" />
              <span className="sharedOptionText">Tag</span>
            </div>
            <div className="sharedOption">
              <Room htmlColor="Crimson" className="sharedIcon" />
              <span className="sharedOptionText">Location</span>
            </div>
            <div className="sharedOption">
              <EmojiEmotions htmlColor="Goldenrod" className="sharedIcon" />
              <span className="sharedOptionText">Mood</span>
            </div>
          </div>
          <button className="sharedButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Shared;

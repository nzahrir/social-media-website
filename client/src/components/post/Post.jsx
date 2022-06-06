import React from "react";
import "./post.css";
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ date, description, likes, comments, photo, userId }) => {
  const [like, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{description}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite htmlColor="red" className="likeIcon" />
            <ThumbUp
              htmlColor="RoyalBlue"
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} Likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comments} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

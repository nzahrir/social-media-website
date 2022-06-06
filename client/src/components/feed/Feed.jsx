import React from "react";
import "./feed.css";
import Shared from "../shared/Shared";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        {Posts.map((p) => (
          <Post
            key={p.key}
            date={p.date}
            description={p.desc}
            likes={p.like}
            comments={p.comment}
            photo={p.photo}
            userId={p.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;

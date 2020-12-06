import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import { RiChat1Line } from "react-icons/ri";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { RiRepeatLine } from "react-icons/ri";
//import RepeatIcon from "@material-ui/icons/Repeat";

import { FaRegHeart } from "react-icons/fa";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { FiUpload } from "react-icons/fi";
//import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDesc">
              <p>{text}</p>
            </div>
          </div>
          <img alt="" src={image} />
          <div className="post__footer">
            <RiChat1Line className="icon icon__chat" />
            <RiRepeatLine className="icon icon__repeat" />
            <FaRegHeart className="icon icon__heart" />
            <FiUpload className="icon icon__upload" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

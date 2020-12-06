import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Belle Carrie",
      username: "BCarrie5",
      verified: true,
      text: tweetMsg,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/originals/78/2e/f0/782ef0d10f6629a673fc6d62b6f10d89.gif",
    });

    setTweetMsg("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/78/2e/f0/782ef0d10f6629a673fc6d62b6f10d89.gif" />
          <input
            onChange={(e) => setTweetMsg(e.target.value)}
            value={tweetMsg}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetBtn"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

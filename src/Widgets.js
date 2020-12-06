import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's happening?</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BCarrie5"
          options={{ height: 400 }}
        />

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterShareButton
          url={"https://facebook.com/bellechang"}
          options={{ text: "#reactjs is awesome", via: "BCarrie5" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

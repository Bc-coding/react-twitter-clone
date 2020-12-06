import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Data = [
  { name: "Explore", icon: <SearchIcon /> },
  { name: "Notifications", icon: <NotificationsNoneIcon /> },
  { name: "Messages", icon: <MailOutlineIcon /> },
  { name: "Bookmarks", icon: <BookmarkBorderIcon /> },
  { name: "Lists", icon: <ListAltIcon /> },
  { name: "Profile", icon: <PermIdentityIcon /> },
  { name: "More", icon: <MoreHorizIcon /> },
];

export default Data;

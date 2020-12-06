import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import DataSidebarOption from "./DataSidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active={true} text="Home" icon={<HomeIcon />} />

      {DataSidebarOption.map((item) => {
        const { name, icon } = item;
        return <SidebarOption text={name} icon={icon} key={name} />;
      })}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

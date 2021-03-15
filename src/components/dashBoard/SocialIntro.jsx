import React from "react";
import AddIcon from "@material-ui/icons/Add";

function SocialIntro() {
  return (
    <div className="socialIntro ">
      <div className="head2">Welcome back, Rishikesh</div>
      <div className="linkHead">Click here to see the tutorial</div>
      <div className="socialChannels">
        <div className="channel">
          <p>Social channels</p>
          <p>1</p>
        </div>
        <div className="channel">
          <p>Brands</p>
          <p>1</p>
        </div>
        <div className="channel">
          <p>Campaigns</p>
          <p>0</p>
        </div>
        <div className="channel">
          <p>Scheduled posts</p>
          <p>1</p>
        </div>
      </div>

      <div className="addChannel">
        <AddIcon />
        <p className="ml-1">Upgrade for more users, channels and brands.</p>
      </div>
      <div className="social_bottom">
        <p>A campaign can make a message repeately come back</p>
        <p>Bonc tip</p>
      </div>
    </div>
  );
}

export default SocialIntro;

import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function BoncShop() {
  return (
    <div className="boncshop">
      <div className="top">
        <h3>Bonc Shop</h3>
        <CallMadeIcon />
      </div>
      <div className="bottom">
        <p className="t_post">Need some help by creating social media post?</p>
        <p className="s_para">
          At the Bonc Shop we help you to create content and we even can do the
          social media posting for you.
        </p>
      </div>
    </div>
  );
}

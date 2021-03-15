import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

export default function DashPost() {
  return (
    <div className="dashpost">
      <input placeholder="Start your Post Here..." />
      <div className="postOptions">
        <div className="row">
          <div className="option">
            <CloudUploadIcon />
            <p>Your photo’s</p>
          </div>
          <div className="option">
            <ImageIcon />
            <p>Canva</p>
          </div>
          <div className="option">
            <YouTubeIcon />
            <p>Youtube</p>
          </div>
        </div>
        <div className="row">
          <div className="option">
            <FormatQuoteIcon />
            <p>Bonc quote's</p>
          </div>
          <div className="option">
            <ImageIcon />
            <p>Bonc video</p>
          </div>
          <div className="option">
            <YouTubeIcon />
            <p>Bonc Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

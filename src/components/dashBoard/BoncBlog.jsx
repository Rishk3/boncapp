import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function BoncBlog() {
  return (
    <div className="boncblog">
      <div className="top">
        <h3>Bonc Latest Blog</h3>
        <CallMadeIcon />
      </div>

      <div className="bottom">
        <div className="blog">
          <div className="img">
            <img
              className="blogImg"
              src="https://boncapp.com/images/blog_en_1.png"
              alt=""
            />
          </div>
          <div className="blogDesc">
            <p className="n_para">How to do contentmarketing, step by step</p>
            <p className="s_para">Strategist at Beeldvoerders</p>
          </div>
        </div>
        <div className="blog">
          <div className="img">
            <img
              className="blogImg"
              src="https://boncapp.com/images/blog_en_1.png"
              alt=""
            />
          </div>
          <div className="blogDesc">
            <p className="n_para">How to do contentmarketing, step by step</p>
            <p className="s_para">Strategist at Beeldvoerders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

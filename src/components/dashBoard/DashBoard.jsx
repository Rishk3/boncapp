import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SocialIntro from "./SocialIntro";
import DashPost from "./DashPost";
import TeamInfo from "./TeamInfo";
import ToolBox from "./ToolBox";
import BoncBlog from "./BoncBlog";
import TodayPost from "./TodayPost";
import BoncShop from "./BoncShop";

function DashBoard() {
  useEffect(() => {
    document.title = "DashBoard";
  });

  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} xl={4} lg={4}>
          <SocialIntro />
        </Grid>
        <Grid item xs={12} md={12} xl={8} lg={8}>
          <DashPost />
          <Grid item xs={12} md={12} xl={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} xl={6} lg={6}>
                <TeamInfo />
              </Grid>
              <Grid item xs={12} md={12} xl={6} lg={6}>
                <ToolBox />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* //2nd row */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} xl={4} lg={4}>
          <BoncBlog />
        </Grid>
        <Grid item xs={12} md={12} xl={5} lg={5}>
          <TodayPost />
        </Grid>
        <Grid item xs={12} md={12} xl={3} lg={3}>
          <BoncShop />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;

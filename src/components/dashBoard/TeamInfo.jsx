import React from "react";
import Grid from "@material-ui/core/Grid";

export default function TeamInfo() {
  return (
    <div className="teaminfo">
      <div className="top">
        <p>Team Info</p>
        <p>Add a Member</p>
      </div>
      <div className="middle">You can add 1 team Member</div>
      <div className="bottom">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">1</div>
              <p>Master</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">1</div>
              <p>Admin</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">1</div>
              <p>Users</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

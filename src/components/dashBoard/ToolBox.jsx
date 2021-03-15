import React from "react";
import Grid from "@material-ui/core/Grid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import CreateIcon from "@material-ui/icons/Create";

export default function ToolBox() {
  return (
    <div className="toolbox">
      <div className="top">
        <p>Use Our ToolBox</p>
      </div>
      <div className="middle">Use Canva to make your brand visual</div>
      <div className="bottom">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">
                <MailOutlineIcon />
              </div>

              <p>Email header</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">
                <FacebookIcon />
              </div>
              <p>Admin</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="data">
              <div className="head2">
                <CreateIcon />
              </div>
              <p>Users</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

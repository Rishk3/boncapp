import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="nav_links">
          <div className="logo">
            <img
              className="logo_img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///+lpaXPz8/o6OjIyMjCwsJ9fX34+PicnJwLCwvc3NzMzMy/v7+NjY3FxcUtLS0UFBRkZGSvr69VVVVPT0/w8PAgICC1tbVsbGw1NTWdnZ2FhYUaGhqWlpbV1dVGRkY+Pj51dXVnZ2dCQkIRERHi4uINuzuLAAAEUUlEQVR4nO3daXeiMBiG4aBWcKmibQFxrZ36/3/iWJfWBTEs7xLOc3+ccybmOjgpUzExXla7ZDRL475xpX6czkZJJ9Ni7v9ovJ1Iz7hky+3Lc2Gwkp5mxXpBvnAuPcEaauUI27H07GopXD8SjqSnVlu9TGGwkZ5Xjb1nCCNXF9DswuBWGLnzw8+uOLgWBk0D7q/itfBDej4ETS+FC+nZkNT7Ew6l50LU4Fe4lJ4KUZ9noeu3oo97OwoD6XnQ1T8Km3sJDxdxL5SeBWXhj/BVehakDfbCL+lJkLbYC6XnQFvsmbX0HIiLTEt6CsR1jS89BeJWpon/q7jMN029Jz33Lj0B8lLpCZDXrF8/IYQQQgghhNBFm+086a4HnZwc/v3Z9G3nWdSRnmfJ/LaNzlnhZ2LLc1O4sb58bgrDYSGfe8J5QZ9rwo+oMNAtYe+5x21h0X+BrgmX2c9mN0cY3j6y3DThZ0mfM8K47BV0RfhdHuiIsOQi445wXAHohHBRBeiCMHyucFw4aLqw2nvUBWFFoH7hW9OF/apA9cLKl1C7sPol1C5cNV5Y5YbUCeG/6kDlwtZzgOPCGt6kuoUV77kdEPqNFxb5iMlNodUnoM+KpBV5FaMMXld+RltpRU5pEd/cxefspwWAbj5nX2Ap7UnPtVwFbrulp1oy+3u2nfRUS2YvbEtPtWQQQqg/CCHUH4QQ6g9CCPUHIYT6gxBC/UEIof4ghFB/EEKoP3uh5r1//dbj1s9ppzrznGGOie2TX+mLBkUS21y2yyWUArIJ5TaX5RLKPcnAJBR8MIpJKHjiCJNQDsgklNzEmkco+cQUi1D0AUwWoejJRixCSSCLsNt4oewe1gxC4Qe9GYTCJ6gxCGWBDELpQznohdJ75ZMLxb9QQi4UP6mRXCh+Dh61UHqdoRdKrzPkQvF1hlwovs6QC8XXGWqh/DpDLZRfZ4iFCtYZYqGCdYZYKI07RCnUsM7QfkKqYZ0xZjV8edTYfs+IaHz/14c6LmFu9nsGa35SIS88bQKh/iCEUH8QQqg/CCHUH4QQ6g9CCPUHIYT6gxBC/UEIof4ghFB/EEKoPwgh1B+EEOoPQgj1ByGE+oMQQv1xC/tmUss49nELJyatZRz7uIWpmdYyjn3cwplZ1DKOfdzCkUlqGcc+bmFiuM+N4hbuDPf3iJiFE894zEcJMgv9vfCljoHsYxa290LmtymvcOL9CHmPGeQVtg7CoIaRCr0mo9A7CHkvIquwdRJ6cfWxCr0ol/BwqutByPlNP07h+lfoMd6cMgqPR56eDiDm+3Ytn/B0Lu9JGLDtNcEmPJ/hfj5EOuIicgnj4EboRd81EZ7EJAzPwD+hF2xqMuTHI3z/G+byqHOWHSdYhL2LYa4Ocx8yHGXOIAyv9u6/Oa6e/gaOXnjzCuZ2XGojsbB/N/6d0PO6W8qfHJTCpT+8HyZDuG+XjL7SmARKIuzH6WyUZG8q8h9ArEHC1SDc3AAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </div>
          <div className="nav_link">Dashboard</div>
          <div className="nav_link">Post</div>
          <div className="nav_link">Campaign</div>
          <div className="nav_link">Schedule</div>
          <div className="nav_link">Analytics</div>
          <div className="nav_link">ToolBox</div>
        </div>
        <div className="right_nav">
          <div className="setting">
            <SettingsIcon />
          </div>
          <div className="setting">
            <HelpOutlineIcon />
          </div>

          <div className="userInfo">
            Rishikesh Kumar
            <div className="keyDown">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

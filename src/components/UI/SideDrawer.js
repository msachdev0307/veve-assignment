import React from "react";
const SideDrawer = (props) => {
  return (
    <div className="sidePanel">
      <button onClick={props.closeNotificationPanel} className="closeButton">
        X
      </button>
      <div className="sidePanelContent">No Notifications to show</div>
    </div>
  );
};

export default SideDrawer;

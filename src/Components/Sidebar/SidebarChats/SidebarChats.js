import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChats.css';
function SidebarChats({ id, chatName }) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChats__info">
        <h3>{chatName}</h3>
        <p>Last Message</p>
        <small>Timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChats;

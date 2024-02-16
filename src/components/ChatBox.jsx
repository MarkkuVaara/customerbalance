
import React from 'react';

const ChatBox = ({ isOpen, onClose, children }) => {

  const chatboxClassName = isOpen ? "chatboxcont open" : "chatboxcont";

  return (
    <div className={chatboxClassName}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <div className="chatbox-content">
            {children}
        </div>
    </div>
  );

};

export default ChatBox;

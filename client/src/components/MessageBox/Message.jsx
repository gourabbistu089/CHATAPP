import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const forMe = message.senderId === authUser._id;
  const formattedDate = formatMongoDate(message.createdAt);
  const chatClassName = forMe ? " chat-end" : " chat-start";
  const bubbleBgColor = forMe ? " bg-blue-500" : " bg-slate-700";
  return (
      <div className={`chat  ${chatClassName} `}>
        <div className={`chat-bubble  ${bubbleBgColor} `}> {message.message} </div>
        <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center  text-gray-100 mt-1">{formattedDate}</div>
      </div>
  );
}

export default Message;

function formatMongoDate(isoDate) {
  const date = new Date(isoDate);

  // Get the day, month, and time parts
  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'short' }); // e.g., "Nov"
  
  // Format hours and minutes in 12-hour format
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  
  // Convert 24-hour time to 12-hour time
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  return `${day}, ${month}, ${hours}:${minutes} ${ampm}`;
}



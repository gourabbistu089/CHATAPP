import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const forMe = message.senderId === authUser._id;
  const formattedDate = extractTime(message.createdAt);
  const chatClassName = forMe ? " chat-end" : " chat-start";
  const bubbleBgColor = forMe ? " bg-blue-500" : " bg-slate-700";
  const shackClass = message.shouldShacke ? "shake-little" : "";
  return (
      <div className={`chat  ${chatClassName} ${shackClass} `}>
        <div className={`chat-bubble  ${bubbleBgColor} `}> {message.message} </div>
        <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center  text-gray-100 mt-1">{formattedDate}</div>
      </div>
  );
}

export default Message;

   function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }



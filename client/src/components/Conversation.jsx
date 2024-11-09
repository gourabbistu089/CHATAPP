import React from "react";
import useConversation from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";

function Conversation({conversation}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation?._id;
  const {onlineUser} =  useSocketContext();
  const isOnline = onlineUser.includes(conversation?._id);
  console.log(onlineUser)
  return (
    <>
      <div className={` flex gap-2 items-center hover:bg-gray-700 rounded py-1 cursor-pointer p-2 
       ${isSelected && "bg-slate-700"} `}
       onClick={() => setSelectedConversation(conversation)}
       >
        <div class={`avatar ${isOnline ? "online" : ""}`}>
          <div class="w-12 rounded-full">
            <img src={conversation?.avatar} />
          </div>
        </div>
      <div className=" flex flex-col flex-1 "> 
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-300 text-lg">{conversation?.fullname}</p>
        </div>

      </div>
      </div>

      <div className=" divider my-0 py-0 h-1"/>
    </>
  );
}

export default Conversation;

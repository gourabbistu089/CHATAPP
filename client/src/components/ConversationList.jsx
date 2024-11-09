import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";

function ConversationList() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className=" loading loading-spinner mx-auto "></span>
      ) : (
        conversations.map((conversation,ind) => (
          <Conversation 
          key={conversation._id} 
          conversation={conversation} 
          lastInd = {conversations.length -1 === ind}
          />
        ))
      )}
    </div>
  );
}

export default ConversationList;

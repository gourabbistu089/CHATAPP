import React, { useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = React.useRef(null);
  useListenMessages();
  useEffect(() => {
   setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
   }, 50);
  }, [messages]);
  return (
    <div className=" p-4 flex-1 overflow-auto">
      {loading && Array.from({ length: 5 }).map((_, index) => <ShimmerChatBubble key={index} />)}
      {!loading && messages.length === 0 && (
        <p className=" text-gray-400 text-center">
          No messages yet Start a Conversation
        </p>
      )}
      {!loading && messages.length > 0 && messages.map((message) => 
      <div key={message._id} 
      ref={lastMessageRef}
      >
        <Message message={message} />
      </div>
      )}

    </div>
  );
}

export default Messages;
const ShimmerChatBubble = () => {
  return (
    <div className="space-y-4 p-4 animate-pulse ">
      {/* Shimmer for received message */}
      <div className="flex items-start">
        <div className="bg-gray-300 w-40 h-10 rounded-tl-xl rounded-tr-xl rounded-br-xl p-2">
          {/* Shimmer effect */}
        </div>
      </div>

      {/* Shimmer for sent message */}
      <div className="flex items-start justify-end">
        <div className="bg-blue-300 w-40 h-10 rounded-tr-xl rounded-tl-xl rounded-bl-xl p-2">
          {/* Shimmer effect */}
        </div>
      </div>
    </div>
  );
};

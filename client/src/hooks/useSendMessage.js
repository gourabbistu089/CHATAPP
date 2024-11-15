import React from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

function useSendMessage() {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/v1/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if(data.error)throw new Error(data.error)
      console.log("sendMessage");
      console.log(data)
        setMessages([...messages, data]);
      console.log("Message sent",messages);
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendMessage;

import React, { useEffect } from 'react'
import useConversation from '../store/useConversation'
import { toast } from 'react-hot-toast'
function useGetMessages() {
 const[loading, setLoading] = React.useState(false)
 const{messages, setMessages, selectedConversation} = useConversation()
 console.log("useGetMessage", selectedConversation)
 useEffect(() => {
    console.log("This is useGetMessages for fetch the messages")
     const getMessages = async () => {
        console.log("Inside getMessages")
         setLoading(true);
         try {
            const response = await fetch(`/api/v1/message/${selectedConversation._id}`);
            const data = await response.json();
            if(data.success === false) throw new Error("No messages found");
            console.log(data)
            setMessages(data);
         } catch (error) {
            console.log(error.message)
         } finally {
             setLoading(false);
         }
     }
     if(selectedConversation._id) getMessages();
 },[selectedConversation._id, setMessages])
  return {loading, messages}
}

export default useGetMessages
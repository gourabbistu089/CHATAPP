import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../store/useConversation';
import notification from '../assets/sent.wav'
function useListenMessages() {

    const {socket} =  useSocketContext();
    const {messages,setMessages} = useConversation()

    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            setMessages([...messages,newMessage])
            const sound = new Audio(notification)
            sound.play() 
            newMessage.shouldShacke = true
        })
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages])
}

export default useListenMessages
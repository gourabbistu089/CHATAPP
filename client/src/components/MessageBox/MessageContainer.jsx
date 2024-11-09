import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { BiSolidFileImage } from 'react-icons/bi'
import useConversation from '../../store/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { HiInformationCircle } from "react-icons/hi";
import MessageHeader from './MessageHeader'

function MessageContainer() {
  const {selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='flex-1
     flex flex-col '>
       {
         !selectedConversation ? <NoChatSelected /> : (
          <>
          {/* Header */}
         <MessageHeader />
  
          {/* Messages */}
          <Messages/>
          {/* Message input */}
          <MessageInput />
          </>
         )
       }

    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
    const {authUser} = useAuthContext();
  return (
    <div className='bg-gradient-to-rpx-6 py-4 mb-4 flex justify-center items-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-4'>
        <p className='flex items-center gap-2'>
          <span className='text-lg'>Welcome to</span>
          <span className='text-2xl font-extrabold'>{authUser.fullname}</span>
        </p>
        <p className='text-gray-300'>Select a chat to start messaging</p>
        <div className='flex items-center justify-center gap-4'>
          <div className='bg-blue-500 rounded-full p-3 shadow-lg'>
            <BiSolidFileImage className='text-white' size={28} />
          </div>
        </div>
      </div>
    </div>
  )
}

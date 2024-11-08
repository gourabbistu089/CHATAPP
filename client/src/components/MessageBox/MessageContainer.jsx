import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { BiSolidFileImage } from 'react-icons/bi'

function MessageContainer() {
  const nochatSelect = true;
  return (
    <div className=' md:min-w-[500px] flex flex-col'>
       {
         nochatSelect ? <NoChatSelected /> : (
          <>
          {/* Header */}
          <div className=' bg-slate-600 px-4 py-2 mb-2'>
              <span className=' label-text'>To</span>
              <span className=' to-gray-700 font-bold'>John Doe</span>
          </div>
  
          {/* Messages */}
          <Messages/>
          {/* Message input */}
          <MessageInput/>
          </>
         )
       }

    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className=' bg-slate-600/10 px-4 py-2 mb-2 flex justify-center items-center w-full h-full'>
      <div className=' px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome to John Doe</p>
        <p>Select a chat to start messaging</p>
        < BiSolidFileImage className=' h-16 w-16' />

      </div>
        
    </div>
  )
}

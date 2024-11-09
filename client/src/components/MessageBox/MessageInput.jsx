import React, { useState } from 'react'
import { BiMailSend, BiSolidSend } from 'react-icons/bi'
import{BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div>
        <form className=' px-4 my-3'  onSubmit={handleSubmit} >
            <div className=' w-full relative'>
                <input type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                placeholder='Type a message'
                />
                <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-3' >
                   {loading ? <div className=' loading loading-spinner'></div> :  <BsSend  className="h-6 w-6" />}
                </button>
              
            </div>
        </form>
    </div>
  )
}

export default MessageInput
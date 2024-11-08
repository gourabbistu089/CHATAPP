import React from 'react'
import { BiMailSend, BiSolidSend } from 'react-icons/bi'

function MessageInput() {
  return (
    <div>
        <form className=' px-4 my-3'>
            <div className=' w-full relative'>
                <input type="text"
                className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                placeholder='Type a message'
                />
                < BiSolidSend className=' h-5 w-5 absolute right-3 top-3 text-white cursor-pointer' />

            </div>
        </form>
    </div>
  )
}

export default MessageInput
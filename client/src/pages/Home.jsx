import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageContainer from '../components/MessageBox/MessageContainer'

function Home() {
  return (
    <div className=' flex sm:h-[650px] md:h-[700px] max-w-5xl w-full p-8 rounded-lg   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-2xl'>
        <Sidebar/>
        <MessageContainer/>

    </div>
  )
}

export default Home
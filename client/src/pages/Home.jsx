import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageContainer from '../components/MessageBox/MessageContainer'

function Home() {
  return (
    <div className=' flex sm:h-[450px] md:h-[550px] p-8 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-2xl bg-gray-700'>

        <Sidebar/>
        <MessageContainer/>

    </div>
  )
}

export default Home
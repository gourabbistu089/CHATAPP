import React from 'react'
import SearchBar from './SearchBar'
import ConversationList from './ConversationList'
import { BiLogOut } from 'react-icons/bi'

function Sidebar() {
  return (
    <div className=' border-r border-slate-600 flex flex-col relative'>
        <SearchBar/>
        <div className=' divider px-3'/>
         <ConversationList/>
        <LogoutBtn />
    </div>
  )
}

export default Sidebar

const LogoutBtn = () => {
  return (
    <div className="form-control w-full absolute -bottom-5 left-0">
      <label className="label cursor-pointer">
        <span className="label-text text-white flex items-center gap-1">
          <BiLogOut className="h-8 w-8 font-extrabold cursor-pointer "/>
        </span>
      </label>
    </div>
  );
}
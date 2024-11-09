import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import useConversation from '../store/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';
function SearchBar() {
  const[search, setSearch] = useState('');
  const{setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    const conversation = conversations.find((conv) => conv.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {setSelectedConversation(conversation);
    setSearch('')
  }
  else{
    toast.error("No user founds")
  }
  }
  return (
    <form onSubmit={handleSubmit}
     className='flex items-center gap-2'>
        <input type="text" 
        onChange={(e) => setSearch(e.target.value)}
        placeholder=' Search.. ' className='input input-bordered w-full' />
        <button className=' btn btn-circle bg-sky-500 text-white'>
            <BiSearch className="h-6 w-6" />
            

        </button>
        
    </form>
  )
}

export default SearchBar
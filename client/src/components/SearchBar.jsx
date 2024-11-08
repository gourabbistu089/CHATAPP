import React from 'react'
import {BiSearch} from "react-icons/bi"
function SearchBar() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder=' Search.. ' className='input input-bordered w-full' />
        <button className=' btn btn-circle bg-sky-500 text-white'>
            <BiSearch className="h-6 w-6" />
            

        </button>
        
    </form>
  )
}

export default SearchBar
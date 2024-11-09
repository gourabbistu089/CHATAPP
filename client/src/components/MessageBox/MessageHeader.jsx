import React, { useState } from 'react';
import useConversation from '../../store/useConversation';
import { HiInformationCircle } from 'react-icons/hi';

function MessageHeader() {
  const { selectedConversation } = useConversation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Header Section */}
      <div className='bg-slate-600 px-4 py-2 mb-2 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={selectedConversation?.avatar} className='w-12 h-12 rounded-full' alt="" />
          <span className='text-gray-200 font-bold text-xl'>{selectedConversation?.fullname}</span>
        </div>
        <p onClick={openModal} className='cursor-pointer'>
          <HiInformationCircle fill='#fffdff' size={28} />
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-slate-300 p-3 rounded-lg shadow-2xl w-full max-w-xl flex flex-col items-center'>
            {/* Close Button */}
            <button onClick={closeModal} className='self-end text-gray-900 font-bold text-4xl mb-4'>&times;</button>

            {/* Image */}
            <img 
              src={selectedConversation?.avatar} 
              className='w-80 h-80 rounded-full mb-6 shadow-lg border-2 border-gray-700' 
              alt={selectedConversation?.fullname} 
            />

            {/* Profile Information */}
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{selectedConversation?.fullname}</h3>
            <p className='text-gray-600 mb-1'><strong>Username:</strong> {selectedConversation?.username}</p>
            <p className='text-gray-600 mb-1'><strong>Email:</strong> {selectedConversation?.email}</p>
            <p className='text-gray-600 mb-1'><strong>Gender:</strong> {selectedConversation?.gender}</p>
            <p className='text-gray-600'><strong>Joined:</strong> {new Date(selectedConversation?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageHeader;

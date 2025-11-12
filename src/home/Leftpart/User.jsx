import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
 const {socket,onlineUsers}=useSocketContext();
 const isOnline= onlineUsers.includes(user._id)

  return (
    <div
      className={`hover:bg-slate-600 duration-300 cursor-pointer ${
        isSelected ? 'bg-slate-700' : ''
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      {/* Single user row */}
      <div className='flex space-x-4 px-8 py-3 items-center hover:bg-slate-700 duration-300 cursor-pointer'>
        <div className={`avatar ${isOnline? "online" :""}`}>
          <div className='relative w-12 h-12'>
  <img
    src='https://img.daisyui.com/images/profile/demo/gordon@192.webp'
    alt='User avatar'
    className='w-12 h-12 rounded-full'
  />
  {isOnline && (
    <span className='absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-black'></span>
  )}
</div>

        </div>

        <div className=''>
          <h1 className='font-bold text-white'>{user.fullname}</h1>
          <span className='text-gray-300 text-sm'>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;

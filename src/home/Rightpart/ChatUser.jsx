import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from "react-icons/ci";
// import profile from "../../../public/user.jpg";

const ChatUser = () => {
  const {selectedConversation}=useConversation();
  // console.log(selectedConversation,"selectedConversation")
   const {onlineUsers,}=useSocketContext()
   const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)?"Online" :"offline"
   }

  return (
   <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className='relative w-12 h-12'>
  <img
    src='https://img.daisyui.com/images/profile/demo/gordon@192.webp'
    alt='User avatar'
    className='w-12 h-12 rounded-full'
  />
 {onlineUsers.includes(selectedConversation._id) && (
    <span className='absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-black'></span>
  )}
</div>

        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChatUser
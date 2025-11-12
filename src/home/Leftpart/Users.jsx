
import React from 'react'
import User from './User'
import useGetAllUser from '../../context/useGetAllUser'
import { Navigate, useNavigate } from 'react-router-dom';
import Right from '../Rightpart/Right';

const Users = () => {
   const [allUser,loading]=useGetAllUser();
  //  console.log("getall user.jsx",allUser)
   const navigate=useNavigate();
  
  return (
    <div>
      <h1 className='px-8 py-2 mt-3 text-white font-semibold bg-slate-800 rounded-md'>Messages
      </h1>
      <div 
      className='py-2 flex-1 overflow-y-auto'
       style={{ maxHeight: "calc(84vh - 10vh)" }}>
      {allUser.map((user,index)=>(
  <User key={index} user={user} />
      ))}
      </div>
    </div>
  )
}

export default Users
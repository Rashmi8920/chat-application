import React, { useState,useEffect,createContext,useContext } from "react"
// import React from 'react';
import { io } from "socket.io-client"
import {useAuth} from './AuthProvider'
const socketContext=createContext()
//its a hook
export const useSocketContext=()=>{
    return useContext(socketContext)
}

export const SocketProvider=({children})=>{
    const [socket,setSocket]=useState(null)
    const [authUser]=useAuth()
    const [onlineUsers,setOnlineUsers]=useState([])


useEffect(()=>{
if(authUser){
    const newSocket=io(`${import.meta.env.VITE_BASE_URL}`,
    {
        query:{
        userId:authUser.user._id,
    },
    });
    setSocket(newSocket);
    newSocket.on("getOnlineUsers",(users)=>{
 setOnlineUsers(users)
    })
    return()=>newSocket.close();
} else{
    if(socket){
        socket.close();
        setSocket(null)
    }
}
},[authUser])
return(
    <>
    <socketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </socketContext.Provider>
    </>
)
};
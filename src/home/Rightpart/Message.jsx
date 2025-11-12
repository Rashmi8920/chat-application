import React from 'react'

const Message = ({ message }) => {
    const authUser = JSON.parse(localStorage.getItem("ChatAppLogin"))
    console.log(message,"messsage")
    const itsMe = message.senderId.toString() == authUser.user._id.toString();

    const chatName = itsMe ? "chat-end" : "chat-start";
    const chatColor = itsMe ? "bg-blue-500" : ""

    const createdAt=new Date(message.createdAt);
    const formatttedTime=createdAt.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
    })
    return (
        <div>

            <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble text-white ${itsMe ? "bg-blue-500 " : "bg-gray-500 "}
                    `}>
                        {message.message}
                        {/* itsMe ? "!bg-gray-500 text-white" : "!bg-blue-500 text-white" */}
                    </div>
                    <div className='chat-footer'>{formatttedTime}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
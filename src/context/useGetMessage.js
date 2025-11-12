import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import axios from 'axios'

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      if (!selectedConversation || !selectedConversation._id) return;

      setLoading(true);
      try {
        const res = await axios.get(
           `${import.meta.env.VITE_BASE_URL}/api/message/get/${selectedConversation._id}`
        );
        setMessages(res.data);
      } catch (error) {
        console.log('Error in get messages', error);
      } finally {
        setLoading(false);
      }
    };

    getMessage();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;

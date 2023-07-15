import React, { useEffect, useState } from 'react';
import axios from "axios"
const ChatPage = () => {
    const  [chats, setChats] = useState([])
    const fetchChats = async () =>{
       const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/chat`)
       setChats(data)
    }
    useEffect(()=>{
        fetchChats();
    },[])
    return (
        <div>
            Chat Page {chats.map((chat)=> <div key={chat._id}>{chat.chatName}</div> )}
        </div>
    );
};

export default ChatPage;
import React, { useEffect, useState } from 'react';
import axios from "axios"

const Chatpage = () => {
    const [chats, setChats] = useState([])
    const [loading,setLoading] = useState(false)
    const fetchChats = async() =>{
        setLoading(true)
        const {data} = await axios.get("/api/chat");
        setChats(data)
        setLoading(false)

       
    }
    useEffect(()=>{
        fetchChats()
    }, [])
    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div>
            {
             Array.isArray(chats) && chats?.length && chats.map((chat) => <div key={chat._id}>
                {
                    chat.chatName
                }
               </div>)
            }
             {console.log(chats)}

             Chats
        </div>
    );
};

export default Chatpage;
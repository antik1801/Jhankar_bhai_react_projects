import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./Chatpage.css"
import { useNavigate } from 'react-router-dom';
import { ChatState } from '../../context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../../components/SideDrawer';
import MyChats from '../../components/MyChats';
import ChatBox from '../../components/ChatBox';

const Chatpage = () => {
    const {user,loading,setLoading} = ChatState()

    const [fetchAgain, setFetchAgain] = useState(false)

    const navigate = useNavigate()
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if (!userInfo) {
            navigate("/")
        }
        else{
            setLoading(false)
        }
    },[navigate])
  
    // if (loading) {
    //     return <h1>Loading.....</h1>
    // }

    return (
        <div className='chatPage' style={{width:'100%'}}>
             { user && <SideDrawer /> }
             <Box  display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>} 
                {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>} 
             </Box>
        </div>
    );
};

export default Chatpage;
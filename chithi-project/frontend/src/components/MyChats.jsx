import React, { useEffect, useState } from 'react';
import { ChatState } from '../context/ChatProvider';
import { Box, Button, Toast, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { AddIcon } from '@chakra-ui/icons';

const MyChats = () => {
    const [loggedUser, setLoggedUser] = useState([])
    const {selectedChat,setSelectedChat,user,chats,setChats} = ChatState()
    const toast = useToast()
    const fetchChat = async()=>{
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const {data} = await axios.get("https://chithi-project.vercel.app/api/chat", config)
            console.log(data)
            setChats(data)
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the chats",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
        }
    }

    useEffect(()=>{
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChat();
    },[])
    return (
       <Box 
       display={{base: selectedChat ?  "flex" : "none" , md: "flex"}}
       flexDir="column" alignItems="center" p={3} bg="white" w={{base: "100%", md: "31%"}}
       borderRadius="lg"
       borderWidth="1px"
       >
        <Box
        pb={3}
        px={3}
        fontSize={{base: "28px", md:"30px"}}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        >
            My Chats
            <Button display="flex" fontSize={{base: "17px", md: "10px", lg:"17px"}} rightIcon={ <AddIcon /> }>New Group Chat</Button>
        </Box>
       </Box>
    );
};

export default MyChats;
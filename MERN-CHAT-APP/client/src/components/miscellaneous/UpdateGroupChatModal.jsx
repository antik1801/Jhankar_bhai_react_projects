import { Box, Button, FormControl, IconButton, Input, Spinner, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';
import { ChatState } from '../../Context/ChatProvider';
import UserBadgeItem from '../UserAvatar/UserBadgeItem';
import axios from 'axios';
import UserListItem from '../UserAvatar/UserListItem';

const UpdateGroupChatModal = ({fetchAgain,setFetchAgain}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {selectedChat, setSelectedChat, user} = ChatState()
    const [groupChatName, setGroupChatName] = useState()
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading,setLoading] = useState(false)
    const [renameLoading, setRenameLoading] = useState(false)
    const toast = useToast()
    const handleRemove = ()=>{}
    const handleAddToUser = async(addUser) =>{
        if (selectedChat.users.find((user)=> user._id === addUser._id)) {
            toast({
                title: "User already in the group",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            return             
        }
        if (selectedChat.groupAdmin._id !== user._id) {
            toast({
                title: "Only admins can remove a user",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            return  
        }

        try {
                        
        } catch (error) {
            
        }
    }
    const handleRename = async ()=>{
        if (!groupChatName) return
        try {
            setRenameLoading(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const {data} = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/chat/rename`,{
                chatId:selectedChat._id,
                chatName: groupChatName,
            }, config)
            setSelectedChat(data)
            setFetchAgain(!fetchAgain)
            setRenameLoading(false)
        } catch (error) {
            toast({
                title: "Error Occured",
                description: error?.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setRenameLoading(false)
        }
        setGroupChatName("");
    }
    const handleSearch = async (query) =>{
        setSearch(query)
        if (!query) {
            return
        }

        try {
            setLoading(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user?search=${search}`,config)
            console.log(data)
            setLoading(false)
            setSearchResult(data)
        } catch (error) {
            toast({
                title: "Error Occured",
                description: "Failed to load search results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
            setLoading(false)
        }
    }
    return (
        <>
        <IconButton display={{base: "flex"}} icon={<ViewIcon />} onClick={onOpen} />
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="35px" fontFamily="Work sans" display="flex" justifyContent="center">{selectedChat.chatName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box w="100%" display="flex" flexWrap="wrap" pb={3}>
                {selectedChat.users.map(user=>(
                    <UserBadgeItem key={user._id} user={user} handleFunction={()=>handleRemove(user)}></UserBadgeItem>
                ))}
                </Box>
                <FormControl display="flex">
                    <Input placeholder='Chat Name' mb={3} value={groupChatName} onChange={(e)=> setGroupChatName(e.target.value)}></Input>
                    <Button variant="solid" colorScheme='teal' ml={1} isLoading={renameLoading} onClick={handleRename}>Update</Button>
                </FormControl>
                <FormControl>
                    <Input placeholder='Add User to group' mb={1} onChange={(e)=> handleSearch(e.target.value)}></Input>
                </FormControl>
                {loading ? <Spinner size="lg"></Spinner> : (searchResult?.map((user)=><UserListItem key={user._id} user={user} handleFunction={()=> handleAddToUser(user)}></UserListItem>))}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' onClick={()=> handleRemove(user)}>
                Leave Group
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
};

export default UpdateGroupChatModal;
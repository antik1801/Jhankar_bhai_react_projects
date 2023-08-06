import { Button, FormControl, Input, useDisclosure, useToast } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import React, { useState } from 'react';
import { ChatState } from '../context/ChatProvider';
import axios from 'axios';
import UserListItem from './UserAvatar/UserListItem';

const GroupChatModal = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [groupChatName, setGroupChatName] = useState("")
    const [selectedUsers, setSelectedUsers] = useState([])
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    const toast = useToast()

    const {user, chats, setChats} = ChatState();
    const handleSearch = async(query) => {
        setSearch(query)
        if (!query) {
            return ;
        }

        try {
            setLoading(true)
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              };
              const {data} = await axios.get(`https://chithi-project.vercel.app/api/user?search=${search}`,config)
              console.log(data)
              setLoading(false)
              setSearchResult(data)
        } catch (error) {
            toast({
                title: "Error Occured",
                description: "Failed to Load the Search Results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            })
            setLoading(false)
        }
    }
    const handleSubmit = () =>{}
    const handleGroup = (userToAdd) =>{

    }

    return (
        <>
          <span onClick={onOpen}>{children}</span>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader 
              fontSize="35px"
              fontFamily="Work sans"
              display="flex"
              justifyContent="center"
              >Create Group Chats</ModalHeader>
              <ModalCloseButton />
              <ModalBody
              display="flex" flexDir="column" alignItems="center"
              >
                <FormControl >
                    <Input placeholder="Chat Name" mb={3} onChange={(e)=>setGroupChatName(e.target.value)}></Input>
                </FormControl>
                <FormControl >
                    <Input placeholder="Add Users (at least 3 members)" mb={1} onChange={(e)=>handleSearch(e.target.value)}></Input>
                </FormControl>
                {/* selected users  */}
                { loading ? <div>Loading</div> : (
                    searchResult?.slice(0,4).map(user=>(
                        <UserListItem key={user._id} user={user} handleFunction={()=>handleGroup(user)}></UserListItem>
                    ))
                ) }
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='purple'onClick={handleSubmit}>
                  Create Chat
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
};

export default GroupChatModal;
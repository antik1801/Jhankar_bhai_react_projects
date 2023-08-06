import { Avatar, Box, Button, Menu, MenuButton,  Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { ChatState } from '../context/ChatProvider';

const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()
    const {user} = ChatState()
    return (
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        >
            <>
            <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                <Button variant="ghost">
                <i class="fa-solid fa-magnifying-glass"></i>
                <Text display={{base:"none", md:"flex"}} px="4">
                    Search User
                </Text>
                </Button>
            </Tooltip>
            </>
            <Text fontSize="2xl" fontFamily="Work sans">
                Chithi - APP
            </Text>
            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="3xl" m={1}></BellIcon>
                    </MenuButton>
                    {/* <MenuList></MenuList> */}
                </Menu>
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic}></Avatar>    
                </MenuButton>
                </Menu>
            </div>
        </Box>
    );
};

export default SideDrawer;
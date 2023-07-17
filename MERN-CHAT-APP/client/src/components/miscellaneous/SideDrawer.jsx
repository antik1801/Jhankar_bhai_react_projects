import {
  Avatar,
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Toast,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import { Spinner } from '@chakra-ui/spinner'

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/user?search=${search}`,
        config
      );
      // console.log(data)
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error occurd",
        description: "Failed to load the search results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/chat`,
        { userId },
        config
      );

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats])

        setSelectedChat(data);
        setLoading(false);
        onClose();
    } catch (error) {
      toast({
        title: "Error occurd",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  // console.log(searchResult)

  return (
    <>
      <Box className="chatbox-navbar">
        <>
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
            <Button variant="ghost" onClick={onOpen}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
              <Text d={{ base: "none", md: "flex" }} px="4">
                Search User
              </Text>
            </Button>
          </Tooltip>
        </>
        <Text fontSize="2xl" fontFamily="Work sans">
          কথা
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="3xl" m={1}></BellIcon>
              {/* <MenuList></MenuList> */}
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider></MenuDivider>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay></DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
            <DrawerBody>
              <Box className="drawer-body">
                <Input
                  placeholder="Search by name or email"
                  mr={2}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></Input>
                <Button onClick={handleSearch}>Go</Button>
              </Box>
              {loading ? (
                <>
                  <ChatLoading></ChatLoading>
                </>
              ) : (
                searchResult.map((user) => (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => accessChat(user._id)}
                  ></UserListItem>
                ))
              )}
              {loadingChat && <Spinner ml="auto" display="flex"></Spinner> }
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default SideDrawer;

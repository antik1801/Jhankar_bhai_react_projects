import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/miscellaneous/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain,setFetchAgain] = useState(false)
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer></SideDrawer>}
      <Box className="chat-layout">
       <> {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></MyChats>} </>
       <> {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></ChatBox>} </>
      </Box>
    </div>
  );
};

export default ChatPage;

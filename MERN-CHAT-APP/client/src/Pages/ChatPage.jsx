import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/miscellaneous/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer></SideDrawer>}
      <Box className="chat-layout">
       <> {user && <MyChats></MyChats>} </>
       <> {user && <ChatBox></ChatBox>} </>
      </Box>
    </div>
  );
};

export default ChatPage;

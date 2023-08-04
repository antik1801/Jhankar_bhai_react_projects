import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Chatpage from "../pages/ChatPage/Chatpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/chats",
    element: <Chatpage></Chatpage>
  },
]);

export default router;

import { createContext, useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const ChatContext = createContext()

const ChatProvider = ({children}) =>{
    const [user, setUser] = useState([])
    const [loading,setLoading] = useState(true)
    // const navigate = useNavigate();
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        setUser(userInfo)

        if (userInfo) {
            // navigate("/")
            setLoading(false)
        }
    },[])
    const authInfo = {
        user,setUser, loading, setLoading
    }
    return (
        <ChatContext.Provider value={authInfo}>
            {children}
        </ChatContext.Provider>
    )
}
export const ChatState = () => {
  return  useContext(ChatContext)
}


export default ChatProvider;
export const getAllChats =async () =>{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_PROD}/api/chat`)
    const data = await response.json()
    return data
}
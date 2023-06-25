// add rooms to the database
export const addRooms = async roomData =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(roomData)
    })

    const data = await response.json()
    return data
} 

// get all rooms
export const getAllRooms = async () =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await response.json()
    return data
}
// get single rooms
export const getRoom = async (id) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`)
    const data = await response.json()
    return data
}
// get filtered rooms for host
export const getHostRooms = async email =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hostrooms/${email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
    })
    const data = await response.json()
    return data
}
// Delete a room
export const deleteRoom = async id =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`,{
        method: 'DELETE',
        headers:{
            'content-type': 'application/json'
        },
    })
    const result = await response.json()
    return result
    
}

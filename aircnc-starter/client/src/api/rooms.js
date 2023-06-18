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
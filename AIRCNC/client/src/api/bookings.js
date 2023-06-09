// add a bookings
export const addBookings = async bookingData =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    })
    const data = await response.json()
    return data
}

// update room status
export const updateStatus = async (id,status) =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({status})
    })
    const data = await response.json()
    return data;
}

export const getMyBookings = async email =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
    const bookings = await response.json();
    return bookings;
}
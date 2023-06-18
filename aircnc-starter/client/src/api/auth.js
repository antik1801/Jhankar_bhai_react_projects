// save user to the database
export const saveUser = user =>{
    const currentUser = {
        email: user.email,
        picture: user.photoURL,
        role: "user",
        name: user.displayName,
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}
// user role: become a host
export const becomeHost = email =>{
    const currentUser = {
        role: 'host'
    }
    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    
}

// get user role
export const getRole = async email =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const data = await response.json()
    return data?.role
}
import { useState } from "react"

const imageUpload = file =>{
    // imgbb image upload
    const formData = new FormData()
    formData.append("image",file)
    const imgbb_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
    return fetch(imgbb_api_url,{
        method:'POST',
        body: formData,
    })
   
}
export {
    imageUpload, 
}
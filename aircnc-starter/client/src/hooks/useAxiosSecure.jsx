import {useEffect} from 'react'
import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
})
const useAxiosSecure = () =>{
    useEffect(()=>{
            const token = localStorage.getItem('access-token')
        // 1. intercept request (client --- server)
            axiosSecure.interceptors.request.use(config=>{
                config.headers.Authorization = ``
            })


        // 2. intercept response (server --- client)
            axiosSecure.interceptors.response.use(config=>{

            })


    },[])
    return [axiosSecure]
}

export default useAxiosSecure;
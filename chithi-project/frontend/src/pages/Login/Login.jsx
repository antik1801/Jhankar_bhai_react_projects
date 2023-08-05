import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react";
import axios from "axios"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [show,setShow] = useState(false)
    const [loading,setLoading] = useState(false)
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show)

    const submitHandler = async()=>{
        setLoading(true)
        if (!email || !password) {
            toast({
                title: "Please Fill all the field",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false)
              return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const {data} = await axios.post("https://chithi-project.vercel.app/api/user/login", {
                email, password
            }, config)
            toast({
                title: "Loggedin Successfull",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              localStorage.setItem("userInfo", JSON.stringify(data))
              setLoading(false)
              navigate("/chats")
        } catch (error) {
            toast({
                title: "Error Occured",
                description: error.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false)
        }
        
    }

    return (
        <VStack spacing='5px'>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}></Input>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input type={ show ? "text" : "password" } placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}></Input>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button colorScheme='purple' width="100%" style={{marginTop: 15}} onClick={submitHandler} isLoading={loading}>Login</Button>
        </VStack>
    );
};

export default Login;
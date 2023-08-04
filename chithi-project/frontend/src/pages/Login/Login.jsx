import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [show,setShow] = useState(false)


    const handleClick = () => setShow(!show)

    const postDetails = (pic) =>{

    }

    const submitHandler =()=>{}

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
            <Button colorScheme='purple' width="100%" style={{marginTop: 15}} onClick={submitHandler}>Login</Button>
        </VStack>
    );
};

export default Login;
import React, { useState } from "react";
import {
  Stack,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import Loader from "../../utils/Loader";
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useHistory}  from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const history = useHistory()
    const submitHandler = async () =>{
      setLoading(true)
      if(!email || !password){
        toast({
          title: "Please fill proper email and password",
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: "bottom",
        })
        setLoading(false)
        return
      }

      try {
        const config = {
          headers: {
            'Content-type': 'application/json'
          }
        }

        const {data} = await axios.post('/api/user/login', {email,password},config)

        toast({
          title: "Login Successfull",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "bottom",
        })
        
        localStorage.setItem("userInfo", JSON.stringify(data))
        setLoading(false)
        history.push('/chats')
      } catch (error) {
        toast({
          title: "Error Username or Password",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom",
        })
        setLoading(false)
      }
    }
    if (loading) {
      return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Loader></Loader>
      </div>
    }
    return (
        <VStack spacing="5px">
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
              type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Input>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></Input>
            <InputRightElement width="4.5rem">
              <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
          <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          >Login</Button>
          <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={()=> {
            setEmail("guest@example.com")
            setPassword("123456")
          }}
          >
            Get Guest User Credential
          </Button>
      </VStack>
    );
};

export default Login;
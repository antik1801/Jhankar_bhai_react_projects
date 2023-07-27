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
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useHistory}  from 'react-router-dom'
import Loader from "../../utils/Loader";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState("");
  const [loading,setLoading] = useState(false)
  const [picLoading, setPicLoading] = useState(false)
  const toast = useToast()
  const history = useHistory()
  const submitHandler = async() =>{
    setLoading(true)
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please fill all the fields",
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom",
      })
      setLoading(false)
      return
    }
    if (password !== confirmPassword) {
      toast({
        title: "Passwords can't match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      })
      setLoading(false)
      return
    }
    try {
      const config = {
        headers:{
          'Content-type': 'application/json',
        }
      }
      const {data} = await axios.post('/api/user', {
        name, email, password, pic
      }, config)
      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false)
      history.push('/chats')
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
       })
      setLoading(false)
    }
    
  }
  const postDetails = (pic) => {
    setPicLoading(true)
    if (pic === undefined) {
     toast({
      title: "Please select an image!",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom"
     })
     return
    }
    if (pic.type === 'image/jpeg' || pic.type === 'image/png' || pic.type === 'image/jpg') {
      const formData = new FormData()
            formData.append("image",pic)
            const imgbb_api_url = `https://api.imgbb.com/1/upload?key=c75a3afc8636704c3cad4befcacfd202`
            fetch(imgbb_api_url,{
                method:'POST',
                body: formData,
            })
            .then(res=>res.json())
            .then(imageData=>{
                const imageUrl = imageData.data.display_url
                console.log(imageUrl)
                setPic(imageUrl)
                setPicLoading(false)
            })   
            .catch(error=>{
                toast({
                    title: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })
                  setPicLoading(false)
                  return
            })
        }
        else{
            toast({
                title: 'Please Select an Image.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              });
              setPicLoading(false)
              return
    }


  }

  if (loading) {
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Loader></Loader>
    </div>
  }

  return (
    <VStack spacing="5px">
      <FormControl id="firstName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Please retype password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h={"1.75rem"} size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input type="file" p={1.5} accept="image/*" onChange={(e)=> postDetails(e.target.files[0])} placeholder={pic}></Input>
      </FormControl>
        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
        >Sign Up</Button>
    </VStack>
  );
};

export default SignUp;

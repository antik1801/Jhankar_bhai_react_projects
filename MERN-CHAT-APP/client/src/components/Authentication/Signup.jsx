import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [show,setShow] = useState(false)
    const [showConfirm,setShowConfirm] = useState(false)
    const [loading,setLoading] = useState(false)
    const handleClick = () => setShow(!show)
    const handleConfirmClick = () => setShowConfirm(!showConfirm)
    const history = useHistory();
    const toast = useToast()

    const handlePostDetails = (pic) =>{
        setLoading(true)
        if (pic === undefined) {
            toast({
                title: 'Please Select an Image.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              })
              return 
        }
        if (pic.type === 'image/jpeg' || pic.type === 'image/png' || pic.type==='image/jpg') {
          
            const formData = new FormData()
            formData.append("image",pic)
            const imgbb_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
            fetch(imgbb_api_url,{
                method:'POST',
                body: formData,
            })
            .then(res=>res.json())
            .then(imageData=>{
                const imageUrl = imageData.data.display_url
                console.log(imageUrl)
                setLoading(false)
            })   
            .catch(error=>{
                toast({
                    title: 'Please Select an Image.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })
                  setLoading(false)
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
              setLoading(false)
              return
        }

    }
    const handleSubmit = async () =>{
        setLoading(true)
        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: 'Please fill all the fields.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              });
              setLoading(false)
              return
        }
        if (password !== confirmPassword) {
            toast({
                title: 'Please fill all the fields.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              });
              setLoading(false)
              return
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            }
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user`, 
            {name,email,password,pic},
            config
            );

            toast({
                title: 'Registration Successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              });

              localStorage.setItem('userInfo', JSON.stringify(data))
              setLoading(false)
              history.push('/chats')

        } catch (error) {
            console.log(error.message)
            toast({
                title: 'Error Occurs!',
                // description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom"
              });
              setLoading(false)
        }
    }
  return (
    <VStack
      spacing="5px"
      color="black"
    >
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
            type="text"
            placeholder="Enter your name"
            onChange={(e)=> setName(e.target.value)}
            ></Input>
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            type="email" 
            placeholder="Enter your email"
            onChange={(e)=> setEmail(e.target.value)}
            ></Input>
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
            type={ show ? "text" : "password" }
            placeholder="Enter your password"
            onChange={(e)=> setPassword(e.target.value)}
            ></Input>
            <InputRightElement width="4.5rem">
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
                { show ? "Hide" : "Show" }
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input 
            type={ showConfirm ? "text" : "password" }
            placeholder="Enter password again"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            ></Input>
            <InputRightElement width="4.5rem">
            <Button h={"1.75rem"} size={"sm"} onClick={handleConfirmClick}>
                { showConfirm ? "Hide" : "Show" }
            </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input 
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e)=> handlePostDetails(e.target.files[0])}
        >
        </Input>
        </FormControl>
        <Button
        colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={handleSubmit}
        isLoading={loading}
        >SignUp</Button>
    </VStack>
  );
};

export default Signup;

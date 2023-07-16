import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

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
            data.append('file', pic)
            data.append('upload_preset', 'Mern-chat-app')
            data.append('cloud_name',"dvtns4u4y")
            fetch("https://api.cloudinary.com/v1_1/dvtns4u4y", {
                method: "POST",
                body: data
            }).then((res)=>res.json())
            .then(data=>{
                setPic(data.url.toString())
                console.log(data.url.toString())
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
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
    const handleSubmit = () =>{

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

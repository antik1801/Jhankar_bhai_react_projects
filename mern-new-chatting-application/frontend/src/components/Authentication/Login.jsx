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

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const submitHandler = () =>{}
 
    return (
        <VStack spacing="5px">
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
import React from 'react';
import "./Home.css"
import { Box, Container, Text } from "@chakra-ui/react"
// Home is the app.jsx
const Home = () => {
    return (
       <Container maxW='xl' centerContent>
        <Box 
        display='flex' justifyContent='center' p={3}
        bg={'white'} w="100%" m="40px 0 15px 0" 
        borderRadius="lg" borderWidth="1px"
        >
            <Text fontSize="4xl" fontFamily="Work sans">Chithi - APP</Text>
        </Box>
        <Box bg="white" w={"100%"} p="4" borderRadius="lg" borderWidth="1px"></Box>

       </Container>
    );
};

export default Home;
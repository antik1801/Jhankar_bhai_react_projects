import { Box, Button, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [loading,setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()
    return (
        <>
         <Box>
            <Tooltip label="Search Users to Chat" hasArrow placement='bottom-end'>

            </Tooltip>
            <Button variant='ghost'>
                
            </Button>
            </Box>   
        </>
    );
};

export default SideDrawer;
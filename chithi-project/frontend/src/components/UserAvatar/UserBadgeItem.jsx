import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const UserBadgeItem = ({user, handleFunction}) => {
    return (
        <Box
        px={2}
        py={1}
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        borderEndRadius="lg"
        cursor="pointer"
        backgroundColor="purple"
        color="white"
        onClick={handleFunction}
        >
            {user.name}
            <CloseIcon pl={1}></CloseIcon>
        </Box>
    );
};

export default UserBadgeItem;
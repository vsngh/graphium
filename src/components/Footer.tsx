import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return (
        <Flex alignItems="center" justifyContent="center">
            <Text fontFamily="helvetica" fontWeight={500} fontSize={18}>All rights reserved! Graphium.</Text>
        </Flex>
    )
}
export default Footer;
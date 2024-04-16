import { Button, Flex, Img, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();

    const handleVisionClick = () => {
        router.push('/vision',{scroll:false});
    }
    const handleAboutUsClick = () => {
        router.push('/aboutUs',{scroll:false});
    }
    const handleContactClick = () => {
        router.push('/contact',{scroll:false});
    }
    return (
        <>
        <Flex>
            <Img>logo1.png</Img>
        </Flex>
        <Flex
            height="7vh"
            alignItems="center"
            justifyContent="flex-end"
            mr={[4, 8, 12]}
        >
            <Button variant="ghost" colorScheme="black" size="sm" mr={2} onClick={handleVisionClick}>
                <Text fontFamily="helvetica" fontWeight={600} fontSize={20}>Vision</Text>
            </Button>
            <Button variant="ghost" colorScheme="black" size="sm" mr={2} fontFamily="Helvetica" onClick={handleAboutUsClick}>
                <Text fontFamily="helvetica" fontWeight={600} fontSize={20}>About Us</Text>
            </Button>
            <Button variant="ghost" colorScheme="black" size="sm" fontFamily="Helvetica" onClick={handleContactClick}>
                <Text fontFamily="helvetica" fontWeight={600} fontSize={20}>Contact</Text>
            </Button>
        </Flex>
        </>
    );
};

export default Navbar;

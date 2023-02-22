import { MotionBox, itemAnimation, animationContainer } from "@/styles/animation";
import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { Phone, PersonSimple } from "phosphor-react";

export function Header() {
  return (
    <MotionBox
    variants={itemAnimation}
    >
    <Flex justify="space-between" align="center" py={4} px={6} bg="gray.50" borderBottom="1px solid gray" mb="30" m="10">
      <Box w="100%"  gap="2">
        <Link href="/">
        <Text fontWeight="bold" fontSize="large" textTransform="uppercase">Cyclare <Text as="span" color="green" fontWeight="bold" mr="1">.</Text> </Text>
        </Link>
      </Box>
      <Flex>
        <Link mr={4} fontSize="lg" fontWeight="medium">
          Contatos
          <IconButton ml={2} aria-label="Contatos" icon={<Phone />} />
        </Link>
        <Link fontSize="lg" fontWeight="medium">
          Quem Somos Nós
          <IconButton ml={2} aria-label="Quem Somos Nós" icon={<PersonSimple />} />
        </Link>
      </Flex>
    </Flex>
    </MotionBox>
  )
};


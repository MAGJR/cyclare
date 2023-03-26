import { MotionBox,  } from "@/styles/animation";
import { Box, Flex, Text, Link,  } from "@chakra-ui/react";


export function Header() {
  return (
    <MotionBox>
    <Flex justify="space-between" align="center" py={4} px={6} bg="gray.50" borderBottom="1px solid gray" mb="30" m="10">
      <Box >
        <Link href="/">
        <Text fontWeight="bold" fontSize="large" textTransform="uppercase">Cyclare <Text as="span" color="green" fontWeight="bold" mr="1">.</Text> </Text>
        </Link>
      </Box>
      
    </Flex>
    </MotionBox>
  )
};


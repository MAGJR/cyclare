import { Box } from '@chakra-ui/react';
import Link from 'next/link'


export function Foot() {
  return (
    <Box as ="footer" 
    mt={["4", "6"]} 
    p="2" 
    w={["100%", "100%"]} 
    bg="gray.800" 
    textAlign="center"
    >
    
      <Box as="div" ml="auto" mr="auto" maxW={100} gap={1}  display="flex" >
      <Link href="/Terms">Terms </Link>
      |
      <Link href="/Terms">Privacy</Link>
      </Box>
      Copyright © 2023 - All Rights Reserved
    </Box>
  );
}

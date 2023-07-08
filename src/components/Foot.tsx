import { Box } from '@chakra-ui/react';
import Link from 'next/link'


export function Foot() {
  return (
    <Box as ="footer" 
    mt={["140", "10"]}
    h={["120","100%"]}
    p="2" 
    w={["100%", "100%"]} 
    bg="gray.800" 
    textAlign="center"
    >
    
      <Box as="div" ml="auto" mr="auto" maxW={100} gap={1}  display="flex" >
      <Link href="/Terms" target="_blank">Términos </Link>
      |
      <Link  href="/privacy" target="_blank">privacidad</Link>
      </Box>
      Copyright © 2023 - Reservados todos los derechos
    </Box>
  );
}

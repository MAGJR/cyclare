import { Box, Link, Text, VStack } from '@chakra-ui/react';

export function Root() {
  return (
    <Box as="footer" mt="6" p="2" w={["100%","100%"]} bg="gray.800" alignItems="center" justifyContent="center">
      <VStack spacing="2">
        <Text textAlign="center" color="gray.300">
          Direitos reservados
        </Text>
        <Link href="/termos" color="gray.300">
          <Text textAlign="center">Termos</Text>
        </Link>
        <Link href="/politica-de-privacidade" color="gray.300">
          <Text textAlign="center">Política de Privacidade</Text>
        </Link>
        <Text textAlign="center" color="gray.300">
          Copy e Tals
        </Text>
      </VStack>
    </Box>
  );
}

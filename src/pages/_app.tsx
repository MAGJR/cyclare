import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  if (typeof window !== 'undefined') {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

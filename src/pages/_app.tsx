import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga4';

/* if (typeof window !== 'undefined') {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  })
} */

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize("G-9MVHYB9S60");
  
  

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

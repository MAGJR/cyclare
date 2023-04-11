import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import ReactGA from "react-ga4";

if (typeof window !== 'undefined') {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  })
} 

async function initializeGA() {
  await ReactGA.initialize("your GA measurement id");
}

initializeGA();

function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

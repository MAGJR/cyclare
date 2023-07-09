import Head from 'next/head';
import Vturb from './video.jsx'
import { Lead } from '@/components/Lead';
import { Foot } from '@/components/Foot';
import { MotionBox } from '@/styles/animation';
import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, useCallbackRef } from '@chakra-ui/react';


export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const onVideoShow = useCallbackRef(() => {
  Vturb.videoDelay(setIsVisible)
  }, [])
  
  useEffect(() => {
  Vturb.mount();
  window.addEventListener("load", onVideoShow)
  
  return () => {
  Vturb.unmount();
  window.removeEventListener("load", onVideoShow)
  }
  }, [onVideoShow])
  
  return(
  <Flex direction="column" align="center" justify="center" mt={26}>
    <Head>
        <title>Cyclare | Home</title>
      </Head>
  <MotionBox 
      maxW={["100%",'70%']} 
      mt={["0","0"]} 
      mb={["2","5"]}
      textAlign="center">
   <Heading  fontSize={["22", "4xl"]} mb={["5", "3"]}><Text as="span"  color="orange.400" >Esta molécula</Text>  descubierta por científicos de Arizona es capaz de <Text as="span" color="orange.400">limpiar</Text> completamente el <Text as="span" color="orange.400">intestino</Text></Heading>
  <Box 
  id="vid_64aa9889c720b5000a442633" w={["100%","70%"]} h={["50vh", "70vh"]}
  >
  <img alt="thumbnail" id="thumb_64aa9889c720b5000a442633" src="https://images.converteai.net/9c1356bc-b9b5-40dd-8e6e-e356cb7978c3/players/64aa9889c720b5000a442633/thumbnail.jpg" 
 />
  <Box id="backdrop_64aa9889c720b5000a442633" style={{position:"absolute",top:"0",width:"100%",height:"100%",backdropFilter:"blur(5px)"}}></Box>
  </Box>
  <Text fontSize={["1", "9"]} color="gray.900">Este sitio web no está afiliado a Facebook ni a ninguna entidad de Facebook. Una vez que abandonas Facebook, no es responsabilidad de ellos, sino de nuestro sitio web. Hacemos todo lo posible para declarar y mostrar claramente todas las pruebas de productos y los resultados reales obtenidos. No vendemos tu dirección de correo electrónico ni ninguna información a terceros. Nunca realizamos ningún tipo de spam. Si tienes alguna pregunta, no dudes en utilizar el enlace de contacto y comunicarte con nosotros durante el horario comercial de lunes a viernes, de 9:00 a.m. a 6:00 p.m. Leemos y respondemos a todos los mensajes por orden de llegada.</Text>
  </MotionBox>
  
  
  {isVisible && <Lead/>}
  <Foot />
  <Box >
  
  </Box>
  </Flex>
  );
  }

import Head from 'next/head';
import { Lead } from '@/components/Lead';
import { Foot } from '@/components/Foot';
import { MotionBox } from '@/styles/animation';
import { Box, Flex, Heading, Text, useCallbackRef } from '@chakra-ui/react';

import { useState, useEffect } from 'react';



import Vturb from './video.jsx'


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
   <Heading mb={["20", "3"]}><Text as="span"  color="orange.400" >This molecule</Text> discovered by scientists is capable of cleaning the intestine</Heading>
  <Box 
  id="vid_6453f344b0ab0b000926401f" w={["100%","70%"]} h={["50vh", "70vh"]}
  >
  <img alt="thumbnail" id="thumb_6453f344b0ab0b000926401f" src="https://images.converteai.net/9c1356bc-b9b5-40dd-8e6e-e356cb7978c3/players/6453f344b0ab0b000926401f/thumbnail.jpg" 
 />
  <Box id="backdrop_6453f344b0ab0b000926401f" style={{position:"absolute",top:"0",width:"100%",height:"100%",backdropFilter:"blur(5px)"}}></Box>
  </Box>
  </MotionBox>
  
  
  {isVisible && <Lead/>}
  <Foot />
  <Box >
  
  </Box>
  </Flex>
  );
  }

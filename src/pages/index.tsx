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
   <Heading  mb={["20", "3"]}><Text as="span"  color="orange.400" >This molecule</Text> discovered by scientists is capable of cleaning the intestine</Heading>
  <Box 
  id="vid_6453f344b0ab0b000926401f" w={["100%","70%"]} h={["50vh", "70vh"]}
  >
  <img alt="thumbnail" id="thumb_6453f344b0ab0b000926401f" src="https://images.converteai.net/9c1356bc-b9b5-40dd-8e6e-e356cb7978c3/players/6453f344b0ab0b000926401f/thumbnail.jpg" 
 />
  <Box id="backdrop_6453f344b0ab0b000926401f" style={{position:"absolute",top:"0",width:"100%",height:"100%",backdropFilter:"blur(5px)"}}></Box>
  </Box>
  <Text fontSize={["1", "9"]} color="gray.900">This website is not affiliated with Facebook or any Facebook entity. Once you leave Facebook, it's not their responsibility, it's our website's. make every effort to clearly state and show all product evidence and actual used results. We do not sell your email address or any information to third parties. We never do any kind of spam. If you have any questions, please feel free to use the contact link and contact us during business hours Monday through Friday from 9:00 am to 6:00 pm. We read and respond to all messages on a first-come, first-served basis.</Text>
  </MotionBox>
  
  
  {isVisible && <Lead/>}
  <Foot />
  <Box >
  
  </Box>
  </Flex>
  );
  }

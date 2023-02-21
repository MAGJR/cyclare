import { useState, useRef, useEffect } from 'react';
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { Lead } from '@/components/Lead';
import Head from 'next/head';

import { Root } from '@/components/Root';
import { MotionBox, animationContainer } from '@/styles/animation';



interface VideoProps {
  played: number;
}

export default function Home({ played }: VideoProps) {
  const [showContent, setShowContent] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    
  }, []);

  useEffect(() => {
    if (isClient && playerRef && playerRef.current) {
      playerRef.current.seekTo(played);
    }
  }, [played, isClient]);

  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>Cyclare | Início</title>
      </Head>

      <MotionBox
        maxW={'70%'}
        mb="10"
        variants={animationContainer}
        textAlign="center"
        initial="hidden"
        animate="visible"
      >
        <Heading>Headline aqui!</Heading>
      </MotionBox>

      <MotionBox w={['100%', '70%']} h={['50vh', '70vh']}>
        {isClient && (
          <ReactPlayer
            url="test"
            width="100%"
            height="100%"
            controls
            onProgress={(state: ReactPlayerProps) => {
              const { playedSeconds } = state;
              const threshold = 10;

              if (playedSeconds > threshold) {
                setShowContent(true);

                // Recupera o valor armazenado no cookie
                
              }
            }}
            ref={playerRef}
          />
        )}
      </MotionBox>

      {isClient && showContent && <Lead />}
      <Root />
    </Flex>
  );
}

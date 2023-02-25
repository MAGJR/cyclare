import { useState, useRef, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { Lead } from '@/components/Lead';
import Head from 'next/head';

import { Root } from '@/components/Root';
import { MotionBox, animationContainer } from '@/styles/animation';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }, [isClient]);

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
        <Heading>Headline aqui</Heading>
      </MotionBox>

      <MotionBox w={['100%', '70%']} h={['50vh', '70vh']}>
        {isClient && (
          <ReactPlayer
            url="teste"
            width="100%"
            height="100%"
            controls
            onProgress={({ playedSeconds }: ReactPlayerProps) => {
              const threshold = 10;

              if (playedSeconds > threshold) {
                setShowContent(true);

                
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

export async function getStaticProps() {
  // faça a requisição dos dados necessários para a página
  const played = 0;

  return {
    props: {
      played
    },
    
    revalidate: 60 * 60 * 2
  };
}
